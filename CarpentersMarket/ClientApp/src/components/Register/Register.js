import React from 'react';
import { Link } from 'react-router-dom';

import auth from '../../Firebase/auth';

class Register extends React.Component {
    state = {
        user: {
            email: '';
            password: '';
        },
        error: {
            message: '',
            calssText: 'alert alert-danger hidden';
        },
    }

    // Register click event

    RegisterClickEvent = (e) => {
        const { user } = this.state;
        e.preventDefault();
        auth
            .registerUser(user)
            .then(() => {
                this.props.history.push('/');
            })
            .catch((error) => {
                const tempError = {
                    message: error.message,
                    classText: 'alert alert-danger show',
                };
                this.setState({ error: tempError });
            });
    };


    setEmail = (e) => {
        const tempUser = { ...this.state.user };
        tempUser.email = e.target.value;
        this.setState({ user: tempUser });
    };

    setPassword = (e) => {
        const tempUser = { ...this.state.user };
        tempUser.password = e.target.value;
        this.setState({ user: tempUser });
    }



    render() {
        const { user } = this.state;

        return (
            <div>
                <form>
                    <div class="form-group">
                        <label for="exampleInputEmail1">Email address</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Email"></input>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1">Password</label>
                        <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"></input>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputFile">File input</label>
                        <input type="file" id="exampleInputFile"></input>
                        <p class="help-block">Example block-level help text here.</p>
                    </div>
                    <div class="checkbox">
                        <label>
                            <input type="checkbox"> Are you a carpenter</input>
                        </label>
                    </div>
                    <button type="submit" class="btn btn-default">Submit</button>
                </form>
            </div>
        );
    }
}