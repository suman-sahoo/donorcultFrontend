import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export const PublicRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={props => (
        localStorage.getItem('donorData')
            ? <Redirect to={{ pathname: '/fund-raiser-profile', state: { from: props.location } }} />
            : <Component {...props} />
    )} />
)