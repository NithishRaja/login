import { combineEpics, createEpicMiddleware } from "redux-observable";
// import "rxjs";
import loginAttemptEpic from "./loginAttemptEpic";

const allEpics = combineEpics(
  loginAttemptEpic
);

const epicMiddleware = createEpicMiddleware(
  allEpics
);

export default epicMiddleware;
