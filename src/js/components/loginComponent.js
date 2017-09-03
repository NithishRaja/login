import React, {Component} from "react";
import Rx from "rxjs/rx";

export default class Login extends Component{

  render(){

    //JSX for sign in form
    const _loginFormJSX = <form className="panel-body">
                            <formset className="form-group">
                              <label htmlFor="inputEmail">email:</label>
                              <input className="form-control" type="text" id="inputEmail" name="email" placeholder="enter email here" />
                            </formset>
                            <formset className="form-group">
                              <label htmlFor="inputPassword">password:</label>
                              <input className="form-control" type="password" id="inputPassword" name="password" placeholder="enter password here" />
                            </formset>
                          </form>;

    //JSX for login buttons
    const _loginButtonJSX = <div className="panel-footer">
                        <button id="signInButton" className="btn btn-success">Sign In</button>
                        <button id="facebookSignInButton" className="btn btn-primary">{"Sign in with facebook"}</button>
                      </div>;

    //JSX to notify login failure
    const _loginFailedAlert = <div className="alert alert-danger" role="alert"><strong>Recheck email and password</strong></div>;

    //JSX to notify login process is underway
    const _loginVerifyingAlert = <div className="alert alert-info" role="alert"><strong>veryfing, please wait...</strong></div>;

    //deciding which alert to display
    if(this.props.loginAttempt === "underway"){
      var _loginJSX = <article className="panel panel-default">{_loginFormJSX}{_loginVerifyingAlert}{_loginButtonJSX}</article>;
    }else if(this.props.loginAttempt === "failed"){
      _loginJSX = <article className="panel panel-default">{_loginFormJSX}{_loginFailedAlert}{_loginButtonJSX}</article>;
    }else{
      _loginJSX = <article className="panel panel-default">{_loginFormJSX}{_loginButtonJSX}</article>;
    }

    return <section className="well">{_loginJSX}</section>;

  }

  componentDidMount(){

    //listening to button click for the first time
    //listener for signIn button
    Rx.Observable.fromEvent(document.querySelector("#signInButton"), "click")
      .debounceTime(500)
      .subscribe(()=>{
        const email = document.querySelector("#inputEmail").value;
        const password = document.querySelector("#inputPassword").value;
          this.props.attemptLogin({email, password});
      });

    //listener for facebook signIn button
    Rx.Observable.fromEvent(document.querySelector("#facebookSignInButton"), "click")
      .debounceTime(500)
      .subscribe(()=>this.props.attemptFacebookLogin());

  }

  componentDidUpdate(){

    //listen to button clicks only if previous button click is resolved
    if(this.props.loginAttempt != "underway"){
      //listening to button click for every time other than first
      //listener for signIn button
      Rx.Observable.fromEvent(document.querySelector("#signInButton"), "click")
        .debounceTime(500)
        .subscribe(()=>{
          const email = document.querySelector("#inputEmail").value;
          const password = document.querySelector("#inputPassword").value;
            this.props.attemptLogin({email, password});
        });

      //listener for facebook signIn button
      Rx.Observable.fromEvent(document.querySelector("#facebookSignInButton"), "click")
        .debounceTime(500)
        .subscribe(()=>this.props.attemptFacebookLogin());
    }

  }

}
