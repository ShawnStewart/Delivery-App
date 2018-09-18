import {
  ADMIN_LOGIN_SUCCESS,
  ADMIN_LOGIN_ERRORS,
  ADD_RESTAURANT_ERRORS,
  ADD_RESTAURANT_SUCCESS
} from "../Types";
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

// Add restaurant
export const addRestaurant = (userData, history) => dispatch => {
  const options = {
    method: "POST",
    headers: { "content-type": "application/json" },
    data: userData,
    url: "http://localhost:4000/api/admins/addrestaurant"
  };
  axios(options)
    .then(res => {
      dispatch({ type: ADD_RESTAURANT_SUCCESS });
      history.push("/admin/dashboard");
    })
    .catch(err => {
      dispatch({
        type: ADD_RESTAURANT_ERRORS,
        payload: err.response.data
      });
    });
};
