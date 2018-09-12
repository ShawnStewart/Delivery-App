import axios from "axios";
// import setAuthToken from "../utils/setAuthToken";
import jwt_decode from "jwt-decode";

// Register User
export const registerCustomer = (userData, history) => dispatch => {
  axios
    .post("/api/customer/register", userData)
    .then(res => console.log("CUSTOMER CREATED WOOHOO"))
    //   .then(res => history.push("/login"))
    .catch(
      err => console.log("houston, we got errors")
      // dispatch({
      //   type: GET_ERRORS,
      //   payload: err.response.data
      // })
    );
};
