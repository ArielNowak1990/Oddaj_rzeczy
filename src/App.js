import React from 'react';
// import './scss/main.scss';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from "./components/Home";
import PageLog from "./components/Log";
import PageLogOut from "./components/LogOut";
import PageSign from "./components/Sign";
import {Steps} from "./components/Steps";
import { withAuthentication } from './components/session'

function App() {
    return (
        <>
            <Router>
                <Switch>
                    <Route path={'/'} exact component={Home}/>
                    <Route path={'/login'} exact component={PageLog}/>
                    <Route path={'/logout'} exact component={PageLogOut}/>
                    <Route path={'/signup'} exact component={PageSign}/>
                    <Route path={'/steps'} exact component={Steps}/>
                </Switch>
            </Router>
        </>
    );
}

export default withAuthentication(App);

