import { useAuth } from './context/AuthContext';
import AppRouter from './routes/components/App.Routes';
import AppLayout from './layout/AppLayout';
import AuthRoute from './routes/components/Auth.Routes';
import { Routes, Route, Navigate } from 'react-router-dom';

function App() {
  const { user, tokens } = useAuth();

  return (
    <Routes>
      <Route
        path='/'
        element={tokens && user ? <Navigate to='/login' /> : <Navigate to='/dashboard' />}
      />
      
      <AuthRoute />
      <Route element={<AppLayout />}>
        <AppRouter />
      </Route>
    </Routes>
  );
}

export default App;
