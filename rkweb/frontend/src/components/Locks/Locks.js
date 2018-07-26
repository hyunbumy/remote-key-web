import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import Lock from './Lock/Lock';

// const locks = (props) => props.locks.map((lock, index) => {
  // return (
  //   <Lock
  //     lockName={lock.lockName}
  //     ipAddr={lock.ipAddr}
  //     userName={lock.username}
  //     key={lock.id}
  //   />
//   );
// });

// const locks = () => <h1>Hello</h1>;

class Locks extends Component {
  state = {
    locks: [],
    loggedIn: true,
  };

  componentDidMount() {
    axios.get('/api/lock/')
      .then(response => {
        if (response.status === 200) {
          this.setState({ locks: response.data });
        }
      })
      .catch(error => {
        console.log(error);
        if (error.response.status === 403) {
          this.setState({ loggedIn: false });
        }
      });
  }

  render() {
    if (!this.state.loggedIn) {
      return <Redirect to="/app/login/" />;
    }
    return this.state.locks.map((lock, index) => {
      return (
        <Lock
          lockName={lock.lockName}
          ipAddr={lock.ipAddr}
          userName={lock.username}
          key={lock.id}
        />
      );
    });
  }
}

export default Locks;
