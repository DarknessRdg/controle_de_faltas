import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Welcome from "../pages/Welcome";
import HomeTeacher from '../pages/Home/Teacher';
import Nav from '../pages/Home/Nav';
import SideNavBar from '../components/SideNavBar'

import StudentClasses from '../pages/StudentClasses';
import NotAuthenticated from '../pages/NotAuthenticated';
import PrivateRoute from './privateRoute';
import StudentFrequency from '../pages/StudentFrequency';


const sideNavTarget = 'side-nav';

const routesWithSideNav =  [
    '/home',
    '/class',
    '/frequency'
]

const Routes = () => (
    <BrowserRouter>
        <Route path={routesWithSideNav} component={() => <Nav sideNavTarget={sideNavTarget}/>} />
        <Route path={routesWithSideNav} component={() => <SideNavBar id={sideNavTarget}/>} />

        <Switch>
            <Route exact path='/' component={Welcome} />
            <Route exact path='/not-authenticated' component={NotAuthenticated} />
            <PrivateRoute exact path='/home' component={HomeTeacher} />
            <PrivateRoute exact path='/class' component={StudentClasses} />
            <PrivateRoute exact path='/frequency' component={StudentFrequency} />
        </Switch>
        
        
    </BrowserRouter>
)


export default Routes;