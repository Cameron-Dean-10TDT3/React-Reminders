import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';
import logo from 'images/logo.png'

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'Cameron'
    };
  }

  render() {
    return (
      <div>
        <h1>React Reminders</h1>
        <p>
          Start editing to see some magic happen :)
        </p>
        <img src={logo}></img>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
