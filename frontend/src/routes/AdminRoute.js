import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import User from './user';


const AdminRoute = ({component: Component, ...rest}) => (
    <Route {...rest} render={props =>
        User.isAdminAuthenticated() ? (
            <Component {...props} /> 
        ) : (
            <Redirect to={{pathname: '/admin/login', state: { from: props.location }}} />
        )
    } />
)

export default AdminRoute;