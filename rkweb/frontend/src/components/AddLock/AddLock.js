import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';

class AddLock extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      ipAddress: '',
      accessCode: '',
    };
  }

  handleNameChange = (event) => {
    this.setState({ name: event.target.value });
  }

  handleAccessCodeChange = (event) => {
    this.setState({ accessCode: event.target.value });
  }

  handleIpAddressChange = (event) => {
    this.setState({ ipAddress: event.target.value });
  }

  handleSubmit = (event) => {
    // Do nothing
    event.preventDefault();
    axios.post('/api/lock/', {
      name: this.state.name,
      accessCode: this.state.accessCode,
      ipAddress: this.state.ipAddress,
    })
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error.response);
      });
  }

  handleButton = (event) => {
    event.preventDefault();
    window.location.href = '/app/';
  }

  render() {
    return (
      <div className="container">
        <form>
          <div className="form-group">
            <label htmlFor="name">Lock Name:</label>
            <input id="name" className="form-control" type="text" value={this.state.name} onChange={this.handleNameChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="ip-addr">IP Address:</label>
            <input id="ip-addr" className="form-control" type="text" value={this.state.ipAddress} onChange={this.handleIpAddressChange} />
          </div>
          <div className="form-group">
            <label htmlFor="acces-code">Acces Code:</label>
            <input id="access-code" className="form-control" type="password" value={this.state.accessCode} onChange={this.handleAccessCodeChange} required />
          </div>
          <button className="btn btn-primary mt-3" onClick={this.handleSubmit}>
            Submit
          </button>
          <button className="btn btn-primary mt-3" onClick={this.handleButton}>
            Back
          </button>
        </form>
      </div>
    );
  }
}

export default AddLock;
