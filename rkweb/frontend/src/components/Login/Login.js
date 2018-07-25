import React, { Component } from 'react';
import axios from 'axios';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = { username: '', password: '' };
  }

  handleUsernameChange = (event) => {
    this.setState({ username: event.target.value });
  }

  handlePasswordChange = (event) => {
    this.setState({ password: event.target.value });
  }

  handleSubmit = (event) => {
    // Do nothing
    event.preventDefault();
    axios.post('/api/login/', {
      username: this.state.username,
      password: this.state.password,
    })
      .then(response => {
        console.log(response);
        // TODO: if successful, redirect to /app/
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    return (
      <div className="container">
        <form>
          <div className="form-group">
            <label htmlFor="username">Username:</label>
            <input id="username" className="form-control" type="text" value={this.state.username} onChange={this.handleUsernameChange} />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input id="password" className="form-control" type="password" value={this.state.password} onChange={this.handlePasswordChange} />
          </div>
          <button className="btn btn-primary mt-3" onClick={this.handleSubmit}>
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default Login;
