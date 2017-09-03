import { createStore, applyMiddleware } from "redux";
import allReducers from "./../reducers";
import epicMiddleware from "./../epics";

const store = createStore(
  allReducers,
  applyMiddleware(epicMiddleware)
);

export default store;
