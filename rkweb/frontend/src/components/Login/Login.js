import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
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
        if (response.status == 200) {
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
        if (response.status == 200) {
          this.setState({ loggedIn: true });
        }
      })
      .catch(error => {
        console.log(error);
      });
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
