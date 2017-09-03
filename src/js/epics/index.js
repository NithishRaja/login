import { combineEpics, createEpicMiddleware } from "redux-observable";
import "rxjs";
import messageEpic from "./messageEpic";

const allEpics = combineEpics(
  messageEpic
);

const epicMiddleware = createEpicMiddleware(
  allEpics
);

export default epicMiddleware;
