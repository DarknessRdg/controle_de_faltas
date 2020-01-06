import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Welcome from "../pages/Welcome";
import HomeTeacher from '../pages/Home/Teacher';
import NotAuthenticated from '../pages/NotAuthenticated';
import PrivateRoute from './privateRoute';


const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={Welcome} />
            <Route exact path='/not-authenticated' component={NotAuthenticated} />
            <Route exact path='/home/teacher' component={HomeTeacher} />
            <PrivateRoute exact path='/a' component={() => <h1>oi</h1>} />
        </Switch>
    </BrowserRouter>
)


export default Routes;