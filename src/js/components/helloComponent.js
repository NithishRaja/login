import React, {Component} from "react";
import Rx from "rxjs/rx";

export default class Hello extends React.Component {

  render(){

    return <section>
            <h1>Hello {this.props.message}!!</h1>
            <button id="toggleMessage">change message</button>
          </section>;
  }

  componentDidMount(){

    Rx.Observable.fromEvent(document.querySelector("#toggleMessage"), "click")
      .debounceTime(500)
      .subscribe(
        ()=>{this.props.toggleMessage();}
      );

  }

}
