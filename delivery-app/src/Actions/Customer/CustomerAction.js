import { CUSTOMER_REGISTER_ERRORS, CUSTOMER_REGISTER_SUCCESS } from "../Types";
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
      console.log(err);
      dispatch({
        type: CUSTOMER_REGISTER_ERRORS,
        payload: err.response.data
      });
    });
};
