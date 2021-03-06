﻿import React from 'react';
import { Link } from 'react-router-dom';

import auth from '../../Firebase/auth';

class Login extends React.Component {

    state = {
        user: {
            email: 'test@gmail.com',
            password: 'password',
        },
        error: {
            message: '',
            classText: 'alert alert-danger hidden',
        },
    };

    // Click Event for the Login 

    loginClickEvent = (e) => {
        const { user } = this.state;
        e.preventDefault();
        auth
            .loginUser(user)
            .then(() => {
                this.history.push('/');
            })
            .catch(error => {
                const tempError = {
                    message: error.message,
                    classText: 'alert alert-danger show',
                };
                this.setState({ error: tempError })
            });
    };

    // Taking values from the form 

    setEmail = (e) => {
        const tempUser = { ...this.state.user };
        tempUser.email = e.target.value;
        this.setState({ user: tempUser });
    }

    
    setPassword = (e) => {
        const tempUser = { ...this.state.user };
        tempUser.password = e.target.value;
        this.setState({ user: tempUser });
    }

 render() {
        const { user } = this.state;
        return (
            <div className="Login">
                <div id="login-form">

                    <h1 className="text-center">Login</h1>

                    {/* Error Message Alert */}
                    <div className={this.state.error.classText} role="alert">{this.state.error.message}</div>

                    <form className="form-horizontal col-sm-6 col-sm-offset-3">

                        {/* Email input */}
                        <div className="form-group">
                            <label htmlFor="inputEmail" className="col-sm-4 control-label">
                                Email:
                            </label>
                            <div className="col-sm-8">
                                <input
                                    type="email"
                                    className="form-control"
                                    id="inputEmail"
                                    placeholder="Email"
                                    value={user.email}
                                    onChange={this.emailChange}
                                />
                            </div>
                        </div>

                        {/* Password input */}
                        <div className="form-group">
                            <label htmlFor="inputPassword" className="col-sm-4 control-label">
                                Password:
                            </label>
                            <div className="col-sm-8">
                                <input
                                    type="password"
                                    className="form-control"
                                    id="inputPassword"
                                    placeholder="Password"
                                    value={user.password}
                                    onChange={this.passwordChange}
                                />
                            </div>
                        </div>

                        {/* Register button */}
                        <div className="form-group">
                            <div className="col-sm-12 text-center">
                                <Link to="/register">Need to Register?</Link>
                            </div>
                        </div>

                        {/* Submit button */}
                        <div className="form-group">
                            <div className="col-sm-12">
                                <button
                                    type="submit"
                                    className="btn btn-default col-xs-12"
                                    onClick={this.loginClickEvent}
                                >
                                    Login
                                </button>
                            </div>
                        </div>

                    </form>

                </div>
            </div>
        );
    }
}

export default Login;

