import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { PATHS } from '../shared/constants/paths';

interface Props {
    children: React.ReactNode;
}

const ProtectedRoute = ({ children }: Props) => {
    const { currentUser, isLoading } = useAuth();

    if (!currentUser && !isLoading) {
        return <Navigate to={PATHS.main} replace />;
    }

    return <>{children}</>;
};

export { ProtectedRoute };
