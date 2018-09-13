import { CUSTOMER_REGISTER_ERRORS, CUSTOMER_REGISTER_SUCCESS } from "../Types";
import axios from "axios";
import jwt_decode from "jwt-decode";

// Register User
export const registerCustomer = (userData, history) => dispatch => {
  axios
    .post("/api/customers/register", userData)
    .then(res =>
      dispatch({
        type: CUSTOMER_REGISTER_SUCCESS,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: CUSTOMER_REGISTER_ERRORS,
        payload: err.response.data
      })
    );
};
