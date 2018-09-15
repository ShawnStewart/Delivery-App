import { ADMIN_LOGIN_SUCCESS, ADMIN_LOGIN_ERRORS } from "../Types";
import axios from "axios";

// Login Admin
export const loginAdmin = (userData, history) => dispatch => {
  axios
    .post("http://localhost:4000/api/admins/login", userData)
    .then(res => {
      dispatch({ type: ADMIN_LOGIN_SUCCESS });
      localStorage.setItem("AdminToken", res.data.token);
      // history.push("/admin/dashboard");
    })
    .catch(err => {
      dispatch({
        type: ADMIN_LOGIN_ERRORS,
        payload: err.response.data
      });
    });
};
