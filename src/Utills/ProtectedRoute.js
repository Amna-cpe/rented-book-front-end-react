import React from 'react';
import {  Navigate } from 'react-router-dom';

const AuthRoute = ({ children, ...rest })=> {

   
    return rest.auth ? children : <Navigate to={rest.redirect} />;
  };

export default AuthRoute;