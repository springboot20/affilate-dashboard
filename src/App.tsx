import {  useAuth } from './context/AuthContext';
import AppRouter from './routes/components/App.Routes';
// import AppLayout from './layout/AppLayout';
import AuthRoute from './routes/components/Auth.Routes';
import { Routes } from 'react-router-dom';

function App() {
  const { user, tokens } = useAuth();

  return (
    <Routes>
      <AuthRoute />
      <AppRouter />
    </Routes>
  );
}

export default App;
