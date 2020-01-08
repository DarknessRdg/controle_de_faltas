import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import User from './user';

const PrivateRoute = ({component: Component, ...rest}) => (
    <Route {...rest} render={props =>
        User.isAuthenticated() ? (
            <Component {...props} /> 
        ) : (
            <Redirect to={{pathname: '/not-authenticated', state: { from: props.location }}} />
        )
    } />
)

export default PrivateRoute;