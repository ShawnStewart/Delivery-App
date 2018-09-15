import { ADMIN_LOGIN_ERRORS, ADMIN_LOGIN_SUCCESS } from "../Actions/Types";

const initialState = {
  loginErrors: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ADMIN_LOGIN_ERRORS:
      return { ...state, loginErrors: action.payload };
    case ADMIN_LOGIN_SUCCESS:
      return { ...state, loginErrors: {} };

    default:
      return initialState;
  }
}
