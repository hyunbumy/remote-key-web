import React, { Component } from 'react';
import Login from './Login';
import Lock from './Locks/Lock/Lock';
import Locks from './Locks/Locks';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: 'brad',
      locks: [
        { lockName: 'testLock1', ipAddr: '0.0.0.1', id: 1 },
        { lockName: 'testLock2', ipAddr: '0.0.0.2', id: 2 },
        { lockName: 'testLock3', ipAddr: '0.0.0.3', id: 3 },
      ],
      secret: { lockName: 'secret', ipAddr: 'secret', id: 'secret' },
      displaySecret: false,
    };
  }

  loginButtonHandler = (username) => {
    this.setState({ username });
  }

  secretDisplayTogger = () => {
    const toggle = this.state.displaySecret;
    this.setState({ displaySecret: !toggle });
  }

  // TODO: Make the click handler display additional info
  deleteLockHandler = (index) => {
    // New copy of the array
    const locks = [...this.state.locks];
    locks.splice(index, 1);
    this.setState({ locks });
  }

  render() {
    const style = {
      color: 'red',
    };

    let secretLock = null;
    if (this.state.displaySecret) {
      secretLock = (
        <Lock
          lockName={this.state.secret.lockName}
          ipAddr={this.state.username}
          userName={this.state.username}
        />
      );
    }

    const locks = (
      <div>
        <Locks
          locks={this.state.locks}
          clicked={this.deleteLockHandler}
        />
      </div>
    );

    return (
      <div style={style} className="container-fluid App">

        {locks}
        {secretLock}

        <button onClick={() => this.loginButtonHandler('My NAME!!!!')} >Click me!</button>
        <button onClick={this.secretDisplayTogger} >Display Second Lock</button>

        <Login buttonHandler={this.loginButtonHandler} />
      </div>
    );
  }
}

export default App;
