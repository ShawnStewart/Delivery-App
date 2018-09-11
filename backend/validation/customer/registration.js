const Validator = require("validator");
const checkEmpty = require("../checkEmpty");

module.exports = function validateRegisterInput(data) {
  let errors = {};

  data.firstname = !checkEmpty(data.firstname) ? data.firstname : "";
  data.lastname = !checkEmpty(data.lastname) ? data.lastname : "";
  data.email = !checkEmpty(data.email) ? data.email : "";
  data.phone = !checkEmpty(data.phone) ? data.phone : "";
  data.password = !checkEmpty(data.password) ? data.password : "";
  data.password2 = !checkEmpty(data.password2) ? data.password2 : "";

  // firstname
  if (Validator.isEmpty(data.firstname)) {
    errors.firstname = "First name is required";
  } else if (!Validator.isLength(data.firstname, { max: 35 })) {
    errors.firstname = "First name can't be more than 35 characters";
  } else if (!Validator.isAlpha(data.firstname)) {
    errors.firstname = "First name can only be letters";
  }

  // lastname
  if (Validator.isEmpty(data.lastname)) {
    errors.lastname = "Last name is required";
  } else if (!Validator.isLength(data.lastname, { max: 35 })) {
    errors.lastname = "Last name can't be more than 35 characters";
  } else if (!Validator.isAlpha(data.lastname)) {
    errors.lastname = "Last name can only be letters";
  }

  // email
  if (Validator.isEmpty(data.email)) {
    errors.email = "Email is required";
  } else if (!Validator.isEmail(data.email)) {
    errors.email = "Email is invalid";
  }

  // phone number
  if (Validator.isEmpty(data.phone)) {
    errors.phone = "Phone number is required";
  } else if (!Validator.isNumeric(data.phone)) {
    errors.phone = "Phone number can only be numbers";
  } else if (
    !Validator.isLength(data.phone, { min: 10, max: 10 }) ||
    !Validator.isMobilePhone(data.phone)
  ) {
    errors.phone = "Phone number is invalid";
  }

  // password
  if (Validator.isEmpty(data.password)) {
    errors.password = "Password field is required";
  } else if (!Validator.isLength(data.password, { min: 6 })) {
    errors.password = "Password must be at least 6 characters";
  }

  // password confirmation
  if (Validator.isEmpty(data.password2)) {
    errors.password2 = "Please confirm password";
  } else if (!Validator.equals(data.password, data.password2)) {
    errors.password2 = "Passwords must match";
  }

  return {
    errors,
    isValid: checkEmpty(errors)
  };
};
