import React, {Component} from "react";
import Rx from "rxjs/rx";

export default class Login extends Component{

  render(){

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

    const _loginButtonJSX = <div className="panel-footer">
                        <button id="signInButton" className="btn btn-success">Sign In</button>
                        <button id="facebookSignInButton" className="btn btn-primary">{"Sign in with facebook"}</button>
                      </div>;

    const _loginFailedAlert = <div className="alert alert-danger" role="alert"><strong>Recheck email and password</strong></div>;

    const _loginVerifyingAlert = <div className="alert alert-info" role="alert"><strong>veryfing, please wait...</strong></div>;

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

    Rx.Observable.fromEvent(document.querySelector("#signInButton"), "click")
      .subscribe(()=>{
        const email = document.querySelector("#inputEmail").value;
        const password = document.querySelector("#inputPassword").value;
        this.props.attemptLogin({email, password});
      });

    Rx.Observable.fromEvent(document.querySelector("#facebookSignInButton"), "click")
      .subscribe(()=>alert("support for facebook sign in is under development"));

  }

}
