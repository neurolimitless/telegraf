import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routes'
import {browserHistory} from 'react-router';
import {Router} from "express";

class App extends React.Component {
    render() {
        return (
            <div>
                <h1>Hello</h1>
            </div>
        );
    }
}

function createHistory() {
    return browserHistory;
}

ReactDOM.render(
    <Router history={createHistory()}>
        {AppRouter}
    </Router>);
document.getElementById('app');
export default App;
