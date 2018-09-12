const router = require("express").Router();
const passport = require("passport");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// models
const driver = require("../../models/Driver");

// validation
const validateRegistration = require("../../validation/driver/registration");

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
        year,
        make,
        model
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
    .catch(err => console.log(err));
});

// @route   GET api/driver/login
// @desc    login driver / Return JWT Token
// @access  Private
router.post("/login", (req, res) => {
  const { errors, isValid } = validateLogin(req.body);
  // Check Validation
  if (!isValid) {
    return res.status(400).json(errors);
  }
  const email = req.body.email;
  const password = req.body.password;

  // Find user by email
  Driver.findOne({ email }).then(user => {
    // Check for user
    if (!user) {
      errors.email = "User not found";
      return res.status(404).json(errors);
    }

    // Check Password
    bcrypt.compare(password, user.password).then(isMatch => {
      if (isMatch) {
        // User matched
        const payload = { id: user.id, name: user.name }; // Create JWT payload

        // Sign Token
        jwt.sign(
          payload,
          process.env.ACCESS_KEY,
          { expiresIn: 3600 },
          (err, token) => {
            res.json({
              success: true,
              token: "Bearer " + token
            });
          }
        );
      } else {
        errors.password = "Password incorrect";
        return res.status(400).json(errors);
      }
    });
  });
});

module.exports = router;
