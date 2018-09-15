import {
  CUSTOMER_REGISTER_ERRORS,
  CUSTOMER_REGISTER_SUCCESS,
  CUSTOMER_LOGIN_ERRORS,
  CUSTOMER_LOGIN_SUCCESS
} from "../Actions/Types";

const initialState = {
  registerErrors: {},
  loginErrors: {},
  restaurantSelected: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case CUSTOMER_REGISTER_ERRORS:
      return { ...state, registerErrors: action.payload };
    case CUSTOMER_REGISTER_SUCCESS:
      return { ...state, registerErrors: {} };

    case CUSTOMER_LOGIN_ERRORS:
      return { ...state, loginErrors: action.payload };
    case CUSTOMER_LOGIN_SUCCESS:
      return { ...state, loginErrors: {} };

    default:
      return initialState;
  }
}
