const Validator = require("validator");
const checkEmpty = require("../checkEmpty");

module.exports = function validateRegisterInput(data) {
  let errors = {};

  data.username = !checkEmpty(data.username) ? data.username : "";
  data.password = !checkEmpty(data.password) ? data.password : "";

  // username
  if (Validator.isEmpty(data.username)) {
    errors.username = "Username is required";
  } else if (!Validator.isLength(data.username, { max: 16 })) {
    errors.username = "Username can't be more than 16 characters";
  } else if (!/^[a-zA-Z0-9]+([._-]?[a-zA-Z0-9]+)*$/.test(data.username)) {
    errors.username =
      "Username can not begin/end with or have multiple consectutive occurances of: { . _ - }";
  }

  // password
  if (Validator.isEmpty(data.password)) {
    errors.password = "Password field is required";
  } else if (!Validator.isLength(data.password, { min: 6 })) {
    errors.password = "Password must be at least 6 characters";
  }
};
