import React, {Component} from "react";
import {Link} from "react-router-dom";

export default class NotFound extends Component{

  constructor(props){
    super(props);

  }

  render(){

    return <header>
            <div className="jumbotron">
              <h1 className="display-3">{"404: Page not found"}</h1>
              <p className="lead">{"The page you requested for does not exist."}</p>
              <hr className="my-4" />
              <p><Link to="/">Login</Link>{" to visit our pages or "}<Link to="/signup">Signup</Link>{" for free"}</p>
            </div>
          </header>;

  }

}
