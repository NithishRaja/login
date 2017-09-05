import {combineReducers} from "redux";
import loginAttempt from "./loginAttempt";
import signupAttempt from "./signupAttempt";

const allReducers = combineReducers({
  loginAttempt,
  signupAttempt
});

export default allReducers;
