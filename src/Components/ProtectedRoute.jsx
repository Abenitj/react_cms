// src/Components/ProtectedRoute.js
import React from 'react';
import { Navigate} from 'react-router-dom';

const ProtectedRoute = ({ children, isAuthenticated }) => {
  return isAuthenticated ? children :<Navigate to={"/login"}/>;
};

export default ProtectedRoute;
