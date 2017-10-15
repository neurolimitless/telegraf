import React from 'react';
import {
    Router,
    Route,
    IndexRoute,
    browserHistory
} from 'react-router';
import Home from './views/home/index.jsx';
import Login from './views/login';

export default (

    <Route path="/" component={Login}>
        <Route path="/dashboard" component={Home}/>
    </Route>
);

