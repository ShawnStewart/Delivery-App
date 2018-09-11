const router = require("express").Router();
const passport = require("passport");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// models
const Customer = require("../../models/Customer");

// validation
const validateRegistration = require("../../validation/customer/registration");

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

module.exports = router;
