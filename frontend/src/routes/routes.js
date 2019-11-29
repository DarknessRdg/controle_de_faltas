import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Welcome from "../pages/Welcome";
import NotAuthenticated from '../pages/NotAuthenticated';
import Login from '../pages/Login';
import PrivateRoute from './privateRoute';


const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={Welcome} />
            <Route exact path='/not-authenticated' component={NotAuthenticated} />
            <Route exact path='/login' component={Login} />
            <PrivateRoute exact path='/a' component={() => <h1>oi</h1>} />
        </Switch>
    </BrowserRouter>
)


export default Routes;