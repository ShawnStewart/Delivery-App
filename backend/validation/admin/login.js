const Validator = require("validator");
const checkEmpty = require("../checkEmpty");

module.exports = function validateLogin(data) {
  let errors = {};

  data.username = !checkEmpty(data.username) ? data.username : "";
  data.password = !checkEmpty(data.password) ? data.password : "";

  if (Validator.isEmpty(data.username)) {
    errors.username = "Username field is required";
  }

  if (Validator.isEmpty(data.password)) {
    errors.password = "Password field is required";
  }

  return {
    errors,
    isValid: checkEmpty(errors)
  };
};
