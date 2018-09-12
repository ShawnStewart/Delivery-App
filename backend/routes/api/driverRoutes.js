const router = require("express").Router();
const passport = require("passport");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// models
const Driver = require("../../models/Driver");

// validation
const validateRegistration = require("../../validation/driver/registration");
const validateLogin = require("../../validation/login");

// @route   POST api/drivers/register
// @desc    Registers new driver
// @access  Public
router.post("/register", (req, res) => {
  const { errors, isValid } = validateRegistration(req.body);
  // validation check
  if (!isValid) return res.status(400).json(errors);

  const {
    firstname,
    lastname,
    email,
    password,
    phone,
    birthday,
    year,
    make,
    model
  } = req.body;

  Driver.findOne({ email: req.body.email })
    .then(foundemail => {
      if (foundemail) {
        errors.email = "An account with that email already exists";
        return res.status(400).json(errors);
      }

      const newDriver = new Driver({
        firstname,
        lastname,
        email,
        password,
        phone,
        birthday,
        vehicle: {
          year,
          make,
          model
        }
      });

      bcrypt.genSalt(11, (err, salt) => {
        bcrypt.hash(newDriver.password, salt, (err, hash) => {
          if (err) return res.status(400).json(err);
          newDriver.password = hash;
          newDriver
            .save()
            .then(created => res.status(201).json(created))
            .catch(err => console.log(err));
        });
      });
    })
    .catch(err => res.status(404).json({ message: err }));
});

// @route   GET api/driver/login
// @desc    login driver / Return JWT Token
// @access  Private
router.post("/login", (req, res) => {
  const { errors, isValid } = validateLogin(req.body);
  // Check Validation
  if (!isValid) return res.status(400).json(errors);

  const email = req.body.email;
  const password = req.body.password;

  // Find user by email
  Driver.findOne({ email })
    .then(user => {
      // Check for user
      if (!user) {
        errors.email = "Invalid Credentials";
        return res.status(400).json(errors);
      }

      // Check Password
      bcrypt
        .compare(password, user.password)
        .then(isMatch => {
          if (isMatch) {
            const payload = {
              type: 2,
              id: user.id,
              firstname: user.firstname,
              lastname: user.lastname
            };

            // Sign Token
            jwt.sign(
              payload,
              process.env.ACCESS_KEY,
              { expiresIn: "1h" },
              (err, token) => {
                res.json({
                  success: true,
                  token: "Bearer " + token
                });
              }
            );
          } else {
            errors.email = "Invalid Credentials";
            return res.status(400).json(errors);
          }
        })
        .catch(err => console.log(err));
    })
    .catch(err => res.status(404).json({ message: err }));
});

module.exports = router;
