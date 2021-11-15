import React from 'react';
import {  Navigate } from 'react-router-dom';
import { useAuthState } from '../Context/AuthContext';
const AuthRoute = ({ children, ...rest })=> {
  const {authenticated:auth} = useAuthState();
   
    return auth ? children : <Navigate to="/admin" />;
  };

export default AuthRoute;