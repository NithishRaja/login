import React, {Component} from "react";
import {Link} from "react-router-dom";
import Rx from "rxjs/rx";

export default class Signup extends Component{

  constructor(props){
    super(props);

    this._signupFormJSX = <form className="panel-body">
                            <formset className="form-group">
                              <label htmlFor="signupName">name:</label>
                              <input className="form-control" type="text" id="signupName" name="name" placeholder="enter name here" />
                            </formset>
                            <formset className="form-group">
                              <label htmlFor="signupEmail">email:</label>
                              <input className="form-control" type="text" id="signupEmail" name="email" placeholder="enter email here" />
                            </formset>
                            <formset className="form-group">
                              <label htmlFor="signupPassword">password:</label>
                              <input className="form-control" type="password" id="signupPassword" name="password" placeholder="enter password here" />
                            </formset>
                            <formset className="form-group">
                              <label htmlFor="signupPasswordRe">re-password:</label>
                              <input className="form-control" type="password" id="signupPasswordRe" name="passwordRe" placeholder="re-enter password here" />
                            </formset>
                          </form>;

    this._signupButtonJSX = <div className="panel-footer">
                              <button className="btn btn-success" id="signupButton">Sign Up</button>
                            </div>;

    this._signupVerifyingAlertJSX = <div className="alert alert-info" role="alert"><strong>veryfing, please wait...</strong></div>;

    this._signupAccountExistsAlertJSX = <div className="alert alert-info" role="alert"><strong>{"account for this email already exists"}</strong></div>;

    this._signupPasswordsDonotMatchJSX = <div className="alert alert-danger" role="alert"><strong>{"account for this email already exists"}</strong></div>;

    this._signupJSX = <article className="panel panel-default">{this._signupFormJSX}{this._signupButtonJSX}</article>;

    this._loginJSX = <div>{"already have an account? "}<Link to="/">click here</Link>{" to log in"}</div>;

  }

  render(){

    if(this.props.signupAttempt === "underway"){
      this._signupJSX = <article className="panel panel-default">{this._signupFormJSX}{this._signupVerifyingAlertJSX}{this._signupButtonJSX}</article>;
    }else if(this.props.signupAttempt === "account-exists"){
      this._signupJSX = <article className="panel panel-default">{this._signupFormJSX}{this._signupAccountExistsAlertJSX}{this._signupButtonJSX}</article>;
    }else if(this.props.signupAttempt === "passwords-donot-match"){
      this._signupJSX = <article className="panel panel-default">{this._signupFormJSX}{this._signupPasswordsDonotMatchJSX}{this._signupButtonJSX}</article>;
    }

    return <section className="well">{this._signupJSX}{this._loginJSX}</section>;

  }

  componentDidMount(){

    console.log(this.props);

    Rx.Observable.fromEvent(document.querySelector("#signupButton"), "click")
      .debounceTime(500)
      .subscribe(() => this.props.attemptSignup());

  }

  componentDidUpdate(){

    console.log(this.props);

    Rx.Observable.fromEvent(document.querySelector("#signupButton"), "click")
      .debounceTime(500)
      .subscribe(() => this.props.attemptSignup());

  }

}
