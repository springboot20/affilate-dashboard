import React from 'react';
import { useAuth } from '../../context/AuthContext';
import { Navigate } from 'react-router-dom';

const PrivateRoute: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const { user, tokens } = useAuth();

  if (!user && !tokens?.accessToken) return <Navigate to='/' />;
  return children;
};

export default PrivateRoute;