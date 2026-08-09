import React from 'react'
import { Navigate, useLocation } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
    const isAuthenticated = false;


    if (isAuthenticated !== true) {
        return <Navigate to={"/login"} replace></Navigate>
    }

    return children;
}

export default ProtectedRoute