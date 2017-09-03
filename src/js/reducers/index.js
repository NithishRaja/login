import {combineReducers} from "redux";
import isLoggedIn from "./isLoggedInReducer";
import loginAttempt from "./loginAttemptReducer";

const allReducers = combineReducers({
  isLoggedIn,
  loginAttempt
});

export default allReducers;
