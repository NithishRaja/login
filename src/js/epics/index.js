import { combineEpics, createEpicMiddleware } from "redux-observable";
import loginAttemptResetEpic from "./loginAttemptResetEpic";
import loginAttemptEpic from "./loginAttemptEpic";
import facebookLoginAttemptEpic from "./facebookLoginAttemptEpic";
import signupAttemptEpic from "./signupAttemptEpic";
import signupAttemptResetEpic from "./signupAttemptResetEpic";

const allEpics = combineEpics(
  loginAttemptEpic,
  loginAttemptResetEpic,
  facebookLoginAttemptEpic,
  signupAttemptEpic,
  signupAttemptResetEpic
);

const epicMiddleware = createEpicMiddleware(
  allEpics
);

export default epicMiddleware;
