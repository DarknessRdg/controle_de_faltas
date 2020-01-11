import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Welcome from "../pages/Welcome";
import StudentHome from '../pages/Students/Home';
import Nav from '../pages/Students/Home/Nav';
import SideNavBar from '../components/SideNavBar'

import StudentClasses from '../pages/Students/Classes';
import NotAuthenticated from '../pages/NotAuthenticated';
import PrivateRoute from './privateRoute';
import StudentFrequency from '../pages/Students/Frequency';
import HelpMaterial from '../pages/Students/HelpMaterial';


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

        <Switch>
            <Route exact path='/' component={Welcome} />
            <Route exact path='/not-authenticated' component={NotAuthenticated} />
            <PrivateRoute exact path='/home' component={StudentHome} />
            <PrivateRoute exact path='/class' component={StudentClasses} />
            <PrivateRoute exact path='/frequency' component={StudentFrequency} />
            <PrivateRoute exact path='/materials' component={HelpMaterial} />
        </Switch>
        
        
    </BrowserRouter>
)


export default Routes;