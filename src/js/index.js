import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import store from "./store";
import Hello from "./containers/helloContainer";

ReactDOM.render(<Provider store={store}><Hello /></Provider>, document.getElementById("root"));
