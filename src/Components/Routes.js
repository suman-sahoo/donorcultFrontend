import React from 'react';
import {  HashRouter,Switch, Route } from 'react-router-dom';
import Home from '../pages/Home/Home'
import LoginForm from '../pages/Login/LoginForm';
import SignupForm from '../pages/signup/SignupForm';
import SetupFundraiser from '../pages/FundraiserSetup/SetupFundraiser';
import Profile from '../pages/FundraiserProfile/Profile';
import UpdateProfile from '../pages/FundraiserProfile/UpdateProfile';
import ManageFundRaise from '../pages/FundraiserManagement/ManageFundRaise';
import DonorProfile from '../pages/DonorProfileManagement/Profile';

import {PrivateRoute, PublicRoute} from './index';
const Routes = (props) => { 
    return (
            <HashRouter>
            <Switch>
                <Route exact path="/"  render={()=><Home />} />
                <PublicRoute exact path="/login" component={LoginForm}   />
                <PublicRoute exact path="/signup" component={SignupForm}  />
                <PrivateRoute exact path="/fund-raise"  component={SetupFundraiser} />
                <PrivateRoute exact path="/fund-raiser-profile" component={Profile}/>
                <PrivateRoute exact path="/fund-raiser-manage"  component={ManageFundRaise}/>
                <PrivateRoute exact path="/update-profile"   component={UpdateProfile}/>
                <PrivateRoute exact path="/donor-profile"   component={DonorProfile}/>





            </Switch>
            </HashRouter>
    );
};
export  {Routes};

