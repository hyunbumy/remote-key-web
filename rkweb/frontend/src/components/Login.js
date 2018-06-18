import React, {Component} from 'react';

class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {username: '', password: ''};

        this.handleUsernameChange = this.handleUsernameChange.bind(this);
        this.handlePasswordChange = this.handleUsernameChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleUsernameChange(event) {
        this.setState({username: event.target.value});
    }

    handleUsernameChange(event) {
        this.setState({password: event.target.value});
    }

    handleSubmit(event) {
        // Do nothing
        event.preventDefault();
    }

    render() {
        return (
            <div className='container-fluid'>
                <form className='form-group'>
                    <div className='row'>
                        <label htmlFor='username'>Username: </label>
                        <input id='username' className='form-control' type='text' value={this.state.username} onChange={this.handleUsernameChange}/>
                        <label htmlFor='password'>Password: </label>
                        <input id='password' className='form-control' type='password' value={this.state.password} onChange={this.handlePasswordChange}/>
                        <button className="btn btn-primary mt-3" onChange={this.handleSubmit}>
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        )
    }
}

export default Login