import React, {Component} from "react";
import {Link} from "react-router-dom";

export default class NotFound extends Component{

  constructor(props){
    super(props);

    this._notFoundHeaderJSX = <h1>not found</h1>;

    this._notFoundBodyJSX = <p>{"the page you were looking for does'nt exist. "}<Link to="/">click here</Link>{" to go back"}</p>;

  }

  render(){

    return <section>{this._notFoundHeaderJSX}{this._notFoundBodyJSX}</section>;

  }

}
