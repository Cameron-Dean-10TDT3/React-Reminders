import React, { Component } from "react";
import { render } from "react-dom";
import "./style.css";

class App extends Component {
  render() {
    return (
      <div className="titleScreen">
        <h2>What would you like me to remind you about?</h2>
        <div className="logo">
          <img src="https://i.ibb.co/BnsN2hS/logo.png"/>
        </div>
        <div className="btnPosition">
          <button className="btn">Continue</button>
        </div>
      </div>
    );
  }
}

render(<App />, document.getElementById("listRoot"));