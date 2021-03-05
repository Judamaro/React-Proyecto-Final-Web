import React, { Component } from 'react';
import { Router, Switch, Route } from "react-router-dom";
import Login from './LoginPage';
import Home from './HomePage';
import Store from './StorePage';
import history from './history';

export default class Routes extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route path='/' exact component={Login} />
                    <Route path='/Home' component={Home} />
                    <Route path='/Store' component={Store} />
                </Switch>
            </Router>
        );
    }
}