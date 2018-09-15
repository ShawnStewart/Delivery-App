import {
  CUSTOMER_REGISTER_SUCCESS,
  CUSTOMER_REGISTER_ERRORS,
  CUSTOMER_LOGIN_SUCCESS,
  CUSTOMER_LOGIN_ERRORS
} from "../Types";
import axios from "axios";

// Register User
export const registerCustomer = (userData, history) => dispatch => {
  axios
    .post("http://localhost:4000/api/customers/register", userData)
    .then(res => {
      dispatch({ type: CUSTOMER_REGISTER_SUCCESS });
      history.push("/login");
    })
    .catch(err => {
      dispatch({
        type: CUSTOMER_REGISTER_ERRORS,
        payload: err.response.data
      });
    });
};

// Login User
export const loginCustomer = (userData, history) => dispatch => {
  axios
    .post("http://localhost:4000/api/customers/login", userData)
    .then(res => {
      dispatch({ type: CUSTOMER_LOGIN_SUCCESS });
      localStorage.setItem("CustomerToken", res.data.token);
      history.push("/delivery");
    })
    .catch(err => {
      dispatch({
        type: CUSTOMER_LOGIN_ERRORS,
        payload: err.response.data
      });
    });
};
