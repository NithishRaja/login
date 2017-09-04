import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import {HashRouter as Router, Route, Redirect, Switch} from "react-router-dom";
import store from "./store";
import Login from "./containers/loginContainer";
import Signup from "./containers/signupContainer";
import NotFound from "./components/notFoundComponent";

const _mainJSX = <Router>
                  <div>

                      <Switch>
                        <Route path="/" exact component={Login} />
                        <Route path="/signup" component={Signup} />
                        <Route component={NotFound} />
                      </Switch>
                  </div>
                </Router>;

ReactDOM.render(<Provider store={store}>{_mainJSX}</Provider>, document.getElementById("root"));
