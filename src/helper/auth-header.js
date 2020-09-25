import React from 'react';
import jwt_decode from 'jwt-decode';
import { history } from '../helper/history';
import {Link,Redirect} from 'react-router-dom';

export function authHeader() {
// return authorization header with jwt token
  let token = localStorage.getItem('donorData');
  if(token){
    const { exp } = jwt_decode(token.access_token)
    const expirationTime = (exp * 1000) - 60000
    if (Date.now() >= expirationTime) {
      console.log('TTookkrrnn');
      localStorage.setItem('id','');
      history.push('./login')
      window.location.reload(true);
      return{};
      
    }
  }


	if (token && token.access_token) {
	    return { 'x-access-token': token.access_token };
	} else {
	    return {};
	}
}