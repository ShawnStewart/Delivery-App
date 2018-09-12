const Validator = require("validator");
const checkEmpty = require("../validation/checkEmpty");

module.exports = function validateLogin(data) {
  let errors = {};

  data.email = !checkEmpty(data.email) ? data.email : "";
  data.password = !checkEmpty(data.password) ? data.password : "";

  if (!Validator.isEmail(data.email)) {
    errors.email = "Email is invalid";
  }

  if (Validator.isEmpty(data.email)) {
    errors.email = "Email field is required";
  }

  if (Validator.isEmpty(data.password)) {
    errors.password = "Password field is required";
  }

  return {
    errors,
    isValid: checkEmpty(errors)
  };
};
