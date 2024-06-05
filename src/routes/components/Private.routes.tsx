import React from 'react';
import { useAuth } from '../../hooks/useAuth';
import { Navigate } from 'react-router-dom';

const PrivateRoute: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const { user, tokens } = useAuth();

  if (!(user && tokens?.accessToken)) return <Navigate to='/login' />;
  return children;
};

export default PrivateRoute;
