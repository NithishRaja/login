import {combineReducers} from "redux";
import message from "./messageReducer";

const allReducers = combineReducers({
  message
});

export default allReducers;
