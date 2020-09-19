import React from 'react';
import './scss/main.scss';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import Home from "./components/Home";
import PageLog from "./components/Log";
import PageLogOut from "./components/LogOut";
import PageSign from "./components/Sign";
import {Steps} from "./components/Steps";


function App() {
    return (
        <>
            <Router>
                <Switch>
                    <Route path={'/'} exact component={Home}/>
                    <Route path={'/login'}  component={PageLog}/>
                    <Route path={'/logout'}  component={PageLogOut}/>
                    <Route path={'/signup'}  component={PageSign}/>
                    <Route path={'/steps'}  component={Steps}/>
                </Switch>
            </Router>
        </>
    );
}

export default App;