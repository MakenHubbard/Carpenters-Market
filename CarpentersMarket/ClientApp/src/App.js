import React, { Component } from 'react';
import { Route, BrowserRouter, Redirect, Switch } from 'react-router-dom';
import Firebase from 'firebase';

import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import CustomerView from './components/CustomerView/CustomerView';

import FirebaseConnection from './Firebase/connection';

export default class App extends Component {
    displayName = App.name

    render() {
        return (
            <div className="App">
                <BrowserRouter>
                    <div className='container'>
                        <div className='row'>

                            <Switch>
                                <Route
                                    path='/'
                                    exact
                                    component={Home}

                                />
                                <Route
                                    path='/register'

                                    component={Register}

                                />
                                <Route
                                    path='/login'

                                    component={Login}

                                />
                                <Route 
                                    path='/customerview'
                                    component={CustomerView}
                                />

                            </Switch>
                        </div>
                    </div>
                </BrowserRouter>
            </div>
        );
    }
}
