import React, { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import AuthContext from '../contexts/AuthContext.jsx';

const ProtectedRoute = () => {
    const { isAuthenticated, loading } = useContext(AuthContext);

    if (loading) {
        return <div>Carregando...</div>;
    }

    return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoute;