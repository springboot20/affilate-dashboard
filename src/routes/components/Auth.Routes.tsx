import 'react-toastify/dist/ReactToastify.css';
import { Routes, Route } from 'react-router-dom';
import { PublicRoute, Register, Login, NotFound } from '../lazy.import';
import AuthLayout from '../../layout/AuthLayout';

function AuthRoute() {
  return (
    <Routes>
      <Route element={<AuthLayout />}>
        <Route
          path='/'
          element={
            <PublicRoute>
              <Register />
            </PublicRoute>
          }
        />
        <Route
          path='/login'
          element={
            <PublicRoute>
              <Login />
            </PublicRoute>
          }
        />
        <Route
          path='*'
          element={
            <PublicRoute>
              <NotFound />
            </PublicRoute>
          }
        />
      </Route>
    </Routes>
  );
}

export default AuthRoute;
