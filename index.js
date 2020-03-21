import React, { Component } from "react";
import { render } from "react-dom";
import "./style.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "Cameron"
    };
  }
  
  render() {
    return (
      <div className="titleScreen">
        <h1>React Reminders</h1>
        <div className="logo">
          <img src="https://i.ibb.co/BnsN2hS/logo.png"/>
        </div>
        <div className="btnPosition">
          <button className="btn"><a href="./list.html">Continue</a></button>
        </div>
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));