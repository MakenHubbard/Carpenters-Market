import React from 'react';
import { Link } from 'react-router-dom';

import auth from '../Firebase/auth';

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
                    message: error.message;
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
}
