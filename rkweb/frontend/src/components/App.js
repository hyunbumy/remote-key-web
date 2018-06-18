import React, { Component } from 'react';
// import Login from './Login';
import Lock from './Lock';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: 'brad',
    };
  }
  render() {
    return (
      <div className="container-fluid App">
        <Lock lockName="testLock" ipAddr="0.0.0.0" userName={this.state.username} />
      </div>
    );
  }
}

export default App;
