import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from './components/Login';
import Register from './components/Register';


function Routing() {
    return (
       
        <Router>
            <Switch>
                <Route exact path="/" component={Login} />
                <Route path="/Register" component={Register} />
            </Switch>
        </Router>
    )}

    export default Routing;