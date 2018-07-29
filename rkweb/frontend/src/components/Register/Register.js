import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';

class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      email: '',
      password: '',
      passwordConfirm: '',
      loggedIn: false,
      responseReturned: false,
    };
  }

  componentDidMount() {
    // Check if a user is logged in
    axios.get('/api/login/')
      .then(response => {
        console.log(response);
        // TODO: if already logged in, redirect to main page
        if (response.status === 200) {
          this.setState({ loggedIn: true, responseReturned: true });
        }
      })
      .catch(error => {
        console.log(error);
        this.setState({ responseReturned: true });
      });
  }

  handleUsernameChange = (event) => {
    this.setState({ username: event.target.value });
  }

  handlePasswordChange = (event) => {
    this.setState({ password: event.target.value });
  }

  handlePasswordConfirmChange = (event) => {
    this.setState({ passwordConfirm: event.target.value });
  }

  handleEmailChange = (event) => {
    this.setState({ email: event.target.value });
  }

  handleSubmit = (event) => {
    // Do nothing
    event.preventDefault();
    axios.post('/api/register/', {
      username: this.state.username,
      password: this.state.password,
      passwordConfirm: this.state.passwordConfirm,
      email: this.state.email,
    })
      .then(response => {
        console.log(response);
        // TODO: if successful, redirect to /app/
        if (response.status === 200) {
          this.setState({ loggedIn: true });
        }
      })
      .catch(error => {
        console.log(error.response);
      });
  }

  handleButton = (event) => {
    event.preventDefault();
    window.location.href = '/app/login/';
  }

  renderRedirect = () => {
    if (this.state.loggedIn) {
      return <Redirect to="/app/" />;
    }
  }

  render() {
    if (!this.state.responseReturned) {
      return null;
    }
    return (
      <div className="container">
        { this.renderRedirect() }
        <form>
          <div className="form-group">
            <label htmlFor="username">Username:</label>
            <input id="username" className="form-control" type="text" value={this.state.username} onChange={this.handleUsernameChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="username">Email:</label>
            <input id="email" className="form-control" type="email" value={this.state.email} onChange={this.handleEmailChange} />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input id="password" className="form-control" type="password" value={this.state.password} onChange={this.handlePasswordChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="password">Confirm Password:</label>
            <input id="password-confirm" className="form-control" type="password" value={this.state.passwordConfirm} onChange={this.handlePasswordConfirmChange} required />
          </div>
          <button className="btn btn-primary mt-3" onClick={this.handleSubmit}>
            Submit
          </button>
          <button className="btn btn-primary mt-3" onClick={this.handleButton}>
            Back to Login
          </button>
        </form>
      </div>
    );
  }
}

export default Register;
