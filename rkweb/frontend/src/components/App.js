import React, { Component } from 'react';
import Login from './Login';
import Lock from './Lock';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: 'brad',
      locks: [
        { lockName: 'testLock1', ipAddr: '0.0.0.1' },
        { lockName: 'testLock2', ipAddr: '0.0.0.2' },
        { lockName: 'testLock3', ipAddr: '0.0.0.3' },
      ],
    };
  }

  render() {
    return (
      <div className="container-fluid App">
        <Lock
          lockName={this.state.locks[0].lockName}
          ipAddr={this.state.locks[0].ipAddr}
          userName={this.state.username}
        >
        Test Description
        </Lock>

        <Lock
          lockName={this.state.locks[1].lockName}
          ipAddr={this.state.locks[1].ipAddr}
          userName={this.state.username}
        />

        <Lock
          lockName={this.state.locks[2].lockName}
          ipAddr={this.state.locks[2].ipAddr}
          userName={this.state.username}
        >
        Test Description
        </Lock>

        <Login />
      </div>
    );
  }
}

export default App;
