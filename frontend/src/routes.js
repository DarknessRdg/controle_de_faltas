import React from 'react';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';

import Welcome from "./components/Welcome";

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={Welcome}></Route>
        </Switch>
    </BrowserRouter>
)


export default Routes;