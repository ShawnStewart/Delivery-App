const Validator = require("validator");
const checkEmpty = require("../checkEmpty");

module.exports = function validateAddRestaurantInput(data) {
  let errors = {};

  data.name = !checkEmpty(data.name) ? data.name : "";
  data.street = !checkEmpty(data.street) ? data.street : "";
  data.unit = !checkEmpty(data.unit) ? data.unit : "";
  data.city = !checkEmpty(data.city) ? data.city : "";
  data.state = !checkEmpty(data.state) ? data.state : "";
  data.zip = !checkEmpty(data.zip) ? data.zip : "";
  data.phone = !checkEmpty(data.phone) ? data.phone : "";
  data.minimum = !checkEmpty(data.minimum) ? data.minimum : "";

  // name
  if (Validator.isEmpty(data.name)) {
    errors.name = "Name is required";
  }

  // Address
  // street
  if (Validator.isEmpty(data.street)) {
    errors.street = "Street field is required";
  }

  if (Validator.isEmpty(data.unit)) {
    errors.unit = "Unit field is required";
  }

  if (Validator.isEmpty(data.city)) {
    errors.city = "City field is required";
  }

  if (Validator.isEmpty(data.state)) {
    errors.state = "State field is required";
  }

  if (Validator.isEmpty(data.zip)) {
    errors.zip = "Zip code field is required";
  } else if (!Validator.isNumeric(data.zip)) {
    errors.zip = "Zip code can only be a number";
  }

  // phone number
  if (Validator.isEmpty(data.phone)) {
    errors.phone = "Phone number is required";
  } else if (!Validator.isNumeric(data.phone)) {
    errors.phone = "Phone number can only be a number";
  } else if (
    !Validator.isLength(data.phone, { min: 10, max: 10 }) ||
    !Validator.isMobilePhone(data.phone)
  ) {
    errors.phone = "Phone number is invalid";
  }

  if (Validator.isEmpty(data.minimum)) {
    errors.minimum = "Minimum code field is required";
  } else if (!Validator.isNumeric(data.minimum)) {
    errors.minimum = "Minimum can only be a number";
  }
  return { errors, isValid: checkEmpty(errors) };
};
