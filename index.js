import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';

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
      <body>
        <Hello name={this.state.name} />
        <p>
          Start editing to see some magic happen :)
        </p>
        
      </body>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
