import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Welcome from "../components/Welcome";
import PrivateRoute from './privateRoute';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={Welcome} />
            <PrivateRoute exact path='/a' component={() => <h1>oi</h1>} />
        </Switch>
    </BrowserRouter>
)


export default Routes;