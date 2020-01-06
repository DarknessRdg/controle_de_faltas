import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Welcome from "../pages/Welcome";
import HomeTeacher from '../pages/Home/Teacher';
import Nav from '../pages/Home/Nav';
import SideNavBar from '../components/SideNavBar'

import StudentClasses from '../pages/StudentClasses';
import NotAuthenticated from '../pages/NotAuthenticated';
import PrivateRoute from './privateRoute';


const sideNavTarget = 'side-nav';

const Routes = () => (
    <BrowserRouter>
        <Route path={['/home', '/class']} component={() => <Nav sideNavTarget={sideNavTarget}/>} />
        <Route path={['/home', '/class']} component={() => <SideNavBar id={sideNavTarget}/>} />

        <Switch>
            <Route exact path='/' component={Welcome} />
            <Route exact path='/not-authenticated' component={NotAuthenticated} />
            <PrivateRoute exact path='/home' component={HomeTeacher} />
            <PrivateRoute exact path='/class' component={StudentClasses} />
        </Switch>
        
        
    </BrowserRouter>
)


export default Routes;