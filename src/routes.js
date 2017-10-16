import React from 'react';
import {browserHistory, IndexRoute, Route} from 'react-router';
import Home from './views/home/index.jsx';
import Login from './views/login.jsx';

export default (

    <Route path="/" component={Login}>
    <Route path="/dashboard" component={Home}/>
    </Route>

);

