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

    this._signupEmptyFieldAlertJSX = <div className="alert alert-warning" role="alert"><strong>{"fill all the fields before submiting"}</strong></div>;

    this._signupServerErrorAlertJSX = <div className="alert alert-danger" role="alert"><strong>{"server error occured. please try again later"}</strong></div>;

    this._signupVerifyingAlertJSX = <div className="alert alert-info" role="alert"><strong>veryfing, please wait...</strong></div>;

    this._signupAccountExistsAlertJSX = <div className="alert alert-info" role="alert"><strong>{"account for this email already exists"}</strong></div>;

    this._signupPasswordsDonotMatchJSX = <div className="alert alert-warning" role="alert"><strong>{"password field must match password-re field"}</strong></div>;

    this._loginJSX = <div>{"already have an account? "}<Link to="/">click here</Link>{" to log in"}</div>;

    this._signupButtonClickSubscriber = {
      next: () => {
        const name = document.querySelector("#signupName").value;
        const email = document.querySelector("#signupEmail").value;
        const password = document.querySelector("#signupPassword").value;
        const passwordRe = document.querySelector("#signupPasswordRe").value;
        if(name==""||email==""||password==""||passwordRe==""){
          this.props.attemptSignup({type:"SIGNUP_ATTEMPT_FAILED", payload:{reason:"empty-fields"}});
        }else if(password !== passwordRe){
          this.props.attemptSignup({type:"SIGNUP_ATTEMPT_FAILED", payload:{reason:"passwords-donot-match"}});
        }else{
          this.props.attemptSignup({type:"SIGNUP_ATTEMPT_START", payload:{name, email, password, passwordRe}});
        }
      }
    };

  }

  render(){

    switch(this.props.signupAttempt){
      case "underway":
        this._signupJSX = <article className="panel panel-default">{this._signupFormJSX}{this._signupVerifyingAlertJSX}{this._signupButtonJSX}</article>;
        break;
      case "account-exists":
        this._signupJSX = <article className="panel panel-default">{this._signupFormJSX}{this._signupAccountExistsAlertJSX}{this._signupButtonJSX}</article>;
        break;
      case "passwords-donot-match":
        this._signupJSX = <article className="panel panel-default">{this._signupFormJSX}{this._signupPasswordsDonotMatchJSX}{this._signupButtonJSX}</article>;
        break;
      case "empty-fields":
        this._signupJSX = <article className="panel panel-default">{this._signupFormJSX}{this._signupEmptyFieldAlertJSX}{this._signupButtonJSX}</article>;
        break;
      case "server-error":
        this._signupJSX = <article className="panel panel-default">{this._signupFormJSX}{this._signupServerErrorAlertJSX}{this._signupButtonJSX}</article>;
        break;
      default:
        this._signupJSX = <article className="panel panel-default">{this._signupFormJSX}{this._signupButtonJSX}</article>;
    }

    return <section className="well">{this._signupJSX}{this._loginJSX}</section>;

  }

  componentDidMount(){

    Rx.Observable.fromEvent(document.querySelector("#signupButton"), "click")
      .debounceTime(500)
      .subscribe(this._signupButtonClickSubscriber);

  }

  componentDidUpdate(){

    Rx.Observable.fromEvent(document.querySelector("#signupButton"), "click")
      .debounceTime(500)
      .subscribe(this._signupButtonClickSubscriber);

  }

}
