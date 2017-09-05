import React, {Component} from "react";
import Rx from "rxjs/rx";
import {Link} from "react-router-dom";

export default class Login extends Component{

  constructor(props){
    super(props);

    //JSX for sign in form
    this._loginFormJSX = <form className="panel-body">
                            <formset className="form-group">
                              <label htmlFor="loginEmail">email:</label>
                              <input className="form-control" type="text" id="loginEmail" name="email" placeholder="enter email here" />
                            </formset>
                            <formset className="form-group">
                              <label htmlFor="loginPassword">password:</label>
                              <input className="form-control" type="password" id="loginPassword" name="password" placeholder="enter password here" />
                            </formset>
                          </form>;

    //JSX for login buttons
    this._loginButtonJSX = <div className="panel-footer">
                            <button id="loginButton" className="btn btn-success">Sign In</button>
                            <button id="facebookLoginButton" className="btn btn-primary">{"Sign in with facebook"}</button>
                          </div>;

    //JSX to notify login failure
    this._loginFailedAlertJSX = <div className="alert alert-danger" role="alert"><strong>Recheck email and password</strong></div>;

    //JSX to notify login process is underway
    this._loginVerifyingAlertJSX = <div className="alert alert-info" role="alert"><strong>veryfing, please wait...</strong></div>;

    //JSX for sign up link
    this._signUpJSX = <div>{"do not have an account? "}<Link to="/signup" >{"click here"}</Link>{" to sign up for free"}</div>;

    this._loginJSX = <article className="panel panel-default">{this._loginFormJSX}{this._loginButtonJSX}</article>;

    this._loginButtonClickSubscriber = {
      next: ()=>{
        const email = document.querySelector("#loginEmail").value;
        const password = document.querySelector("#loginPassword").value;
        this.props.attemptLogin({email, password});
      }
    };

    this._facebookLoginButtonClickSubscriber = {
      next: ()=>this.props.attemptFacebookLogin()
    };

  }

  render(){

    //deciding which alert to display
    if(this.props.loginAttempt === "underway"){
      console.log("underway");
      this._loginJSX = <article className="panel panel-default">{this._loginFormJSX}{this._loginVerifyingAlertJSX}{this._loginButtonJSX}</article>;
    }else if(this.props.loginAttempt === "failed"){
      this._loginJSX = <article className="panel panel-default">{this._loginFormJSX}{this._loginFailedAlertJSX}{this._loginButtonJSX}</article>;
    }

    return <section className="well">{this._loginJSX}{this._signUpJSX}</section>;

  }

  componentDidMount(){

    //listening to button click for the first time
    //listener for login button
    Rx.Observable.fromEvent(document.querySelector("#loginButton"), "click")
      .debounceTime(500)
      .subscribe(this._loginButtonClickSubscriber);

    //listener for facebook login button
    Rx.Observable.fromEvent(document.querySelector("#facebookLoginButton"), "click")
      .debounceTime(500)
      .subscribe(this._facebookLoginButtonClickSubscriber);

  }

  componentDidUpdate(){

    //listen to button clicks only if previous button click is resolved
    if(this.props.loginAttempt != "underway"){
      //listening to button click for every time other than first
      //listener for login button
      Rx.Observable.fromEvent(document.querySelector("#loginButton"), "click")
        .debounceTime(500)
        .subscribe(this._loginButtonClickSubscriber);

      //listener for facebook login button
      Rx.Observable.fromEvent(document.querySelector("#facebookLoginButton"), "click")
        .debounceTime(500)
        .subscribe(this._facebookLoginButtonClickSubscriber);
    }

  }

}
