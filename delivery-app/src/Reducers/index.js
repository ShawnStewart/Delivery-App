import { combineReducers } from "redux";
import customerReducer from "./customerReducer";
import adminReducer from "./adminReducer";

export default combineReducers({
  customer: customerReducer,
  admin: adminReducer
});
