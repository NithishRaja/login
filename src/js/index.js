import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import {HashRouter as Router, Route, Redirect, Switch} from "react-router-dom";
import store from "./store";
import Login from "./containers/loginContainer";
import Test from "./components/testComponent";

const _mainJSX = <Router>
                  <div>
                    <Redirect from="/" to="/login" />
                      <Switch>
                        <Route path="/login" component={Login} />
                        <Route path="/signup" component={Test} />
                        <Route render={()=><h1>not found</h1>} />
                      </Switch>
                  </div>
                </Router>;

ReactDOM.render(<Provider store={store}>{_mainJSX}</Provider>, document.getElementById("root"));
