import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch,
    Redirect,
} from 'react-router-dom';
import { Normalize } from '@smooth-ui/core-sc';
import Alert from 'react-s-alert';
import 'react-s-alert/dist/s-alert-default.css';
// @ts-ignore
import store from 'store';

import NavBar from './components/NavBar';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Profile from './components/Profile';

import Dashboard from './pages/Dashboard';
import SplashPage from './pages/SplashPage';

import { isAuthenticated } from './api/auth';
import AppWrapper from './styles/AppWrapper';
import styled from 'styled-components';
require('dotenv').config();
class App extends Component {
    componentDidMount() {}

    render() {
        return (
            <div>
                <Normalize />
                <Alert stack={{ limit: 3 }} />

                <Router>
                    <>
                        <NavBar />
                        <AppWrapper>
                            <Switch>
                                <Route
                                    path="/"
                                    exact
                                    component={
                                        isAuthenticated()
                                            ? Dashboard
                                            : SplashPage
                                    }
                                />

                                <Route
                                    path="/dashboard"
                                    component={Dashboard}
                                />
                                <Route path="/login/" component={Login} />
                                <Route path="/signup/" component={SignUp} />
                                <Route path="/profile/" component={Profile} />
                                <Route path="/logout" component={SplashPage} />
                            </Switch>
                        </AppWrapper>
                    </>
                </Router>
            </div>
        );
    }
}

export default App;
