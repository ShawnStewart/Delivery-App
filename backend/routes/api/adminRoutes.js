const router = require("express").Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// models
const Admin = require("../../models/Admin");
const Restaurant = require("../../models/Restaurant");

// validation
const validateRegistration = require("../../validation/admin/registration");
const validateLogin = require("../../validation/admin/login");
const validateAddRestaurant = require("../../validation/admin/addRestaurant");

// @route   POST api/admins/register
// @desc    Registers new admin
// @access  Private
router.post("/register", (req, res) => {
  const { errors, isValid } = validateRegistration(req.body);

  // validation check
  if (!isValid) return res.status(400).json(errors);

  const { username, password } = req.body;

  Admin.findOne({ username })
    .then(foundusername => {
      if (foundusername) {
        errors.username = "An admin with that username already exists";
        return res.status(400).json(errors);
      }

      const newAdmin = new Admin({ username, password });

      bcrypt.genSalt(11, (err, salt) => {
        bcrypt.hash(newAdmin.password, salt, (err, hash) => {
          if (err) return res.status(400).json(err);
          newAdmin.password = hash;
          newAdmin
            .save()
            .then(created => res.status(201).json(created))
            .catch(err => console.log(err));
        });
      });
    })
    .catch(err => console.log(err));
});

// @route   POST api/admins/login
// @desc    Login admin
// @access  Private
router.post("/login", (req, res) => {
  const { errors, isValid } = validateLogin(req.body);

  // Check Validation
  if (!isValid) return res.status(400).json(errors);

  const { username, password } = req.body;

  Admin.findOne({ username })
    .then(found => {
      if (!found) {
        errors.username = "Invalid Credentials";
        return res.status(400).json(errors);
      }

      bcrypt.compare(password, found.password).then(isMatch => {
        if (isMatch) {
          const payload = {
            type: 0,
            id: found._id,
            username: found.username
          };

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
          errors.username = "Invalid Credentials";
          return res.status(400).json(errors);
        }
      });
    })
    .catch(err => res.status(404).json({ message: err }));
});

// @route   POST api/admins/add
// @desc    Add restaurant
// @access  Private
router.post("/addrestaurant", (req, res) => {
  console.log("body", req.body);
  const { errors, isValid } = validateAddRestaurant(req.body);

  // validation check
  if (!isValid) return res.status(400).json(errors);

  const { name, street, unit, city, state, zip, phone, minimum } = req.body;

  Restaurant.findOne({ name: req.body.name })
    .then(foundname => {
      if (foundname) {
        errors.name = "A restaurant with that name already exists";
        return res.status(400).json(errors);
      }

      const newRestaurant = new Restaurant({
        name,
        street,
        unit,
        city,
        state,
        zip,
        phone,
        minimum
      });

      newRestaurant
        .save()
        .then(created => res.status(201).json(created))
        .catch(err => console.log(err));
    })
    .catch(err => console.log(err));
});

module.exports = router;
