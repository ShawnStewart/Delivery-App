import {
  ADMIN_LOGIN_ERRORS,
  ADMIN_LOGIN_SUCCESS,
  ADD_RESTAURANT_ERRORS,
  ADD_RESTAURANT_SUCCESS
} from "../Actions/Types";

const initialState = {
  loginErrors: {},
  addRestaurantErrors: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ADMIN_LOGIN_ERRORS:
      return { ...state, loginErrors: action.payload };
    case ADMIN_LOGIN_SUCCESS:
      return { ...state, loginErrors: {} };
    case ADD_RESTAURANT_ERRORS:
      return { ...state, addRestaurantErrors: action.payload };
    case ADD_RESTAURANT_SUCCESS:
      return { ...state, addRestaurantErrors: {} };

    default:
      return initialState;
  }
}
