const router = require("express").Router();
const passport = require("passport");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// models
const Customer = require("../../models/Customer");

// validation
const validateRegistration = require("../../validation/customer/registration");
const validateLogin = require("../../validation/login");

// @route   POST api/customers/register
// @desc    Registers new customer
// @access  Public
router.post("/register", (req, res) => {
  const { errors, isValid } = validateRegistration(req.body);

  // validation check
  if (!isValid) return res.status(400).json(errors);

  const { firstname, lastname, email, password, phone } = req.body;

  Customer.findOne({ email: req.body.email })
    .then(foundemail => {
      if (foundemail) {
        errors.email = "An account with that email already exists";
        return res.status(400).json(errors);
      }

      const newCustomer = new Customer({
        firstname,
        lastname,
        email,
        password,
        phone
      });

      bcrypt.genSalt(11, (err, salt) => {
        bcrypt.hash(newCustomer.password, salt, (err, hash) => {
          if (err) return res.status(400).json(err);
          newCustomer.password = hash;
          newCustomer
            .save()
            .then(created => res.status(201).json(created))
            .catch(err => console.log(err));
        });
      });
    })
    .catch(err => console.log(err));
});

// @route   GET api/customer/login
// @desc    login customer / Return JWT Token
// @access  Private
router.post("/login", (req, res) => {
  const { errors, isValid } = validateLogin(req.body);

  // Check Validation
  if (!isValid) return res.status(400).json(errors);

  const { password, email } = req.body;

  // Find user by email
  Customer.findOne({ email })
    .then(user => {
      // Check for user
      if (!user) {
        errors.email = "Invalid Credentials";
        return res.status(400).json(errors);
      }

      // Check Password
      bcrypt.compare(password, user.password).then(isMatch => {
        if (isMatch) {
          // User matched
          const payload = {
            type: 1,
            id: user._id,
            firstname: user.firstname,
            lastname: user.lastname
          }; // Create JWT payload

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
      });
    })
    .catch(err => res.status(404).json({ message: err }));
});

module.exports = router;
