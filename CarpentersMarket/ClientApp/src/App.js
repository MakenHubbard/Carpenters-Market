import React, { Component } from 'react';
import { Route, BrowserRouter, Redirect, Switch } from 'react-router-dom';
import Firebase from 'firebase';

import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import CustomerView from './components/CustomerView/CustomerView';
import ProductsPage from './components/ProductsPage/ProductsPage';
import ProductTypesComp from './components/ProductTypes/ProductTypesComp';
import CarpenterView from './components/CarpenterView/CarpenterView';

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
                                    path='/carpenterview'
                                    component={CarpenterView}
                                />
                                <Route
                                    path='/customerview'
                                    component={CustomerView}
                                />
                                <Route
                                    path='/productspage'
                                    component={ProductsPage}
                                />
                                <Route
                                    path='/producttypes'
                                    component={ProductTypesComp}
                                />

                            </Switch>
                        </div>
                    </div>
                </BrowserRouter>
            </div>
        );
    }
}
