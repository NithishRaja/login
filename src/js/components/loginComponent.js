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

    //JSX for empty-fields alert
    this._loginEmptyFieldAlertJSX = <div className="alert alert-warning" role="alert"><strong>{"fill all fields before submiting"}</strong></div>;

    //JSX for account-doesnot-exist alert
    this._loginAccountDoesnotExistAlertJSX = <div className="alert alert-warning" role="alert"><strong>{"account does not exist. sign up to create an account"}</strong></div>;

    //JSX for wrong-password alert
    this._loginWrongPassowrdAlertJSX = <div className="alert alert-danger" role="alert"><strong>{"the password tou entered is wrong. check if CaspLk is off"}</strong></div>;

    //JSX for server-error alert
    this._loginServerErrorAlertJSX = <div className="alert alert-danger" role="alert"><strong>{"server error occured. please try again later"}</strong></div>;

    //JSX for verifying alert
    this._loginVerifyingAlertJSX = <div className="alert alert-info" role="alert"><strong>veryfing, please wait...</strong></div>;

    //JSX for sign up link
    this._signUpJSX = <div>{"do not have an account? "}<Link to="/signup" >{"click here"}</Link>{" to sign up for free"}</div>;

    //subscriber function for listening to loginButton click
    this._loginButtonClickSubscriber = {
      next: ()=>{
        const email = document.querySelector("#loginEmail").value;
        const password = document.querySelector("#loginPassword").value;
        if(email==""||password==""){
          this.props.attemptLogin({type:"LOGIN_ATTEMPT_FAILED",payload:{reason:"empty-fields"}});
        }else{
          this.props.attemptLogin({type:"LOGIN_ATTEMPT_START",payload:{email, password}});
        }
      }
    };

    //subscriber for listening to facebookLoginButton click
    this._facebookLoginButtonClickSubscriber = {
      next: ()=>this.props.attemptFacebookLogin()
    };

  }

  render(){

    //deciding which alert to display
    switch(this.props.loginAttempt){
      case "underway":
        this._loginJSX = <article className="panel panel-default">{this._loginFormJSX}{this._loginVerifyingAlertJSX}{this._loginButtonJSX}</article>;
        break;
      case "account-doesnot-exist":
        this._loginJSX = <article className="panel panel-default">{this._loginFormJSX}{this._loginAccountDoesnotExistAlertJSX}{this._loginButtonJSX}</article>;
        break;
      case "empty-fields":
        this._loginJSX = <article className="panel panel-default">{this._loginFormJSX}{this._loginEmptyFieldAlertJSX}{this._loginButtonJSX}</article>;
        break;
      case "wrong-password":
        this._loginJSX = <article className="panel panel-default">{this._loginFormJSX}{this._loginWrongPassowrdAlertJSX}{this._loginButtonJSX}</article>;
        break;
      case "server-error":
        this._loginJSX = <article className="panel panel-default">{this._loginFormJSX}{this._loginServerErrorAlertJSX}{this._loginButtonJSX}</article>;
        break;
      default:
        this._loginJSX = <article className="panel panel-default">{this._loginFormJSX}{this._loginButtonJSX}</article>;
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
