import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import isAuthenticated from './auth';

const PrivateRoute = ({component: Component, ...rest}) => (
    <Route {...rest} render={props =>
        isAuthenticated() ? (
            <Component {...props} /> 
        ) : (
            <Redirect to={{pathname: '/not-authenticated', state: { from: props.location }}} />
        )
    } />
)

export default PrivateRoute;