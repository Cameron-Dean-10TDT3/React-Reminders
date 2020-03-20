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
      <div>
        <div className="title_screen">
          <h1>React Reminders</h1>
          <img src="https://i.ibb.co/BnsN2hS/logo.png"/>
        </div>
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));