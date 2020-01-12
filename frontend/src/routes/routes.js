import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import PrivateRoute from './privateRoute';
import AdminRoute from './AdminRoute';

import Welcome from "../pages/Welcome";
import StudentHome from '../pages/Students/Home';
import Nav from '../pages/Students/Home/Nav';
import SideNavBar from '../components/SideNavBar'

import StudentClasses from '../pages/Students/Classes';
import NotAuthenticated from '../pages/NotAuthenticated';
import StudentFrequency from '../pages/Students/Frequency';
import HelpMaterial from '../pages/Students/HelpMaterial';
import PageNotFound from '../pages/PageNotFound';

import LoginAdmin from '../pages/Admin/Login'
import AdminHome from '../pages/Admin/Home'
import AdminNav from '../pages/Admin/Nav'


const sideNavTarget = 'side-nav';

const routesWithSideNav =  [
    '/home',
    '/class',
    '/frequency',
    '/materials'
]

const Routes = () => (
    <BrowserRouter>
        <Route path={routesWithSideNav} component={() => <Nav sideNavTarget={sideNavTarget}/>} />
        <Route path={routesWithSideNav} component={() => <SideNavBar id={sideNavTarget}/>} />

        <Route path='/admin' component={AdminNav} />
        <Switch>
            <Route exact path='/' component={Welcome} />
            <Route exact path='/not-authenticated' component={NotAuthenticated} />
            
            <PrivateRoute exact path='/home' component={StudentHome} />
            <PrivateRoute exact path='/class' component={StudentClasses} />
            <PrivateRoute exact path='/frequency' component={StudentFrequency} />
            <PrivateRoute exact path='/materials' component={HelpMaterial} />

            <Route exact path='/login/admin' component={LoginAdmin} />
            <AdminRoute exact path='/admin' component={AdminHome} />

            <Route component={PageNotFound} />
        </Switch>
        
        
    </BrowserRouter>
)


export default Routes;