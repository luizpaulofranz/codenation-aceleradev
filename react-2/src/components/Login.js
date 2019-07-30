import React, { Component } from 'react'
import { login, register, isLogged } from '../services/loginService'
import { withRouter } from 'react-router-dom'

class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: ''
        }
    }

    componentWillMount() {
        if(isLogged()) {
          this.props.history.push('/')
        }
      }

    usernameInputHandler = e => {
        this.setState({username:e.target.value});
    }

    passwordInputHandler = e => {
        this.setState({password:e.target.value});
    }

    doLogin = (e) => {
        if(e) {e.preventDefault();}
        try {
            console.log(this.state)
            login(this.state);
            this.setState({username:'',password:''})
            this.props.history.push('/');
        } catch(e) {
            console.log(e);
            alert(e);
        }
    }

    registerUser = () => {
        try {
            register(this.state);
            this.doLogin();
            this.setState({username:'',password:''})
            this.props.history.push('/');
        } catch (e) {
            console.log(e);
            alert(e);
            this.setState({username:'',password:''})
        }
    }

    render = () => {
        return (
        <form className="form-signin">
            <div className="text-center mb-4">
                <h1 className="h3 mb-3 font-weight-normal">Login / Register</h1>
            </div>
    
            <div className="form-label-group">
                <label htmlFor="inputEmail">Username</label>
                <input
                    name="username"
                    onChange={this.usernameInputHandler}
                    value={this.state.username}
                    className="form-control"
                    placeholder="Username"
                    required
                />
            </div>
    
            <div className="form-label-group mt-2">
                <label htmlFor="inputPassword">Password</label>
                <input
                    name="password"
                    onChange={this.passwordInputHandler}
                    value={this.state.password}
                    type="password"
                    className="form-control"
                    placeholder="Password"
                    required
                />
            </div>
    
            <div className="mt-5">
                <button onClick={this.doLogin} className="login btn btn-lg btn-primary btn-block" type="submit">Login</button>
                <button onClick={this.registerUser} className="register btn btn-lg btn-secondary btn-block" type="submit">Register</button>
            </div>
        </form>
    )}
}

export default withRouter(Login)