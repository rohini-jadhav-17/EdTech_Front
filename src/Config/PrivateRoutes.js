import React from 'react';
import { Navigate } from 'react-router-dom';
import {isAuthenticated} from '../Services/AuthService'

const PrivateRoutes = ({children}) => {
    // isAuth returns true or false based on localstorage
    const authed = isAuthenticated();  
  return authed ? children : <Navigate to="/login" />
  
}

export default PrivateRoutes;