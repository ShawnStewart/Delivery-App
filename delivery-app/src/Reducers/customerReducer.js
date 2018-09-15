import {
  CUSTOMER_REGISTER_ERRORS,
  CUSTOMER_REGISTER_SUCCESS
} from "../Actions/Types";

const initialState = {
  registerErrors: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case CUSTOMER_REGISTER_ERRORS:
      return { ...state, registerErrors: action.payload };
    case CUSTOMER_REGISTER_SUCCESS:
      return { ...state, registerErrors: {} };
    default:
      return initialState;
  }
}
