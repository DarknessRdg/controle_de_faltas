import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Welcome from "../pages/Welcome";
import HomeTeacher from '../pages/Home/Teacher';
import Nav from '../pages/Home/Nav';
import NotAuthenticated from '../pages/NotAuthenticated';
import PrivateRoute from './privateRoute';


const sideNavTarget = 'side-nav';

const Routes = () => (
    <BrowserRouter>
        <Route path='/home' component={() => <Nav sideNavTarget={sideNavTarget}/>} />

        <Switch>
            <Route exact path='/' component={Welcome} />
            <Route exact path='/not-authenticated' component={NotAuthenticated} />
            <PrivateRoute exact path='/home' component={HomeTeacher} />
        </Switch>
    </BrowserRouter>
)


export default Routes;