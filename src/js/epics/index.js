import { combineEpics, createEpicMiddleware } from "redux-observable";
import loginAttemptResetEpic from "./loginAttemptResetEpic";
import loginAttemptEpic from "./loginAttemptEpic";
import facebookLoginAttemptEpic from "./facebookLoginAttemptEpic";

const allEpics = combineEpics(
  loginAttemptEpic,
  loginAttemptResetEpic,
  facebookLoginAttemptEpic
);

const epicMiddleware = createEpicMiddleware(
  allEpics
);

export default epicMiddleware;
