import { useAuth } from './hooks/useAuth';
import AppLayout from './layout/AppLayout';
import { Routes, Route, Navigate } from 'react-router-dom';
import AuthLayout from './layout/AuthLayout';
import {
  Login,
  PublicRoute,
  Register,
  Profile,
  Shop,
  AddProduct,
  ProductDescription,
  PrivateRoute,
  Partner,
  Dashboard,
} from './routes/lazy.import';
import NotFound from './components/NotFound';

function App() {
  const { user, tokens } = useAuth();

  return (
    <Routes>
      <Route
        path='/'
        element={tokens && user ? <Navigate to='/login' /> : <Navigate to='/dashboard' />}
      />

      <Route element={<AuthLayout />}>
        <Route
          path='/register'
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

      <Route element={<AppLayout />}>
        <Route
          path='/dashboard'
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />

        <Route
          path='/add-product'
          element={
            <PrivateRoute>
              <AddProduct />
            </PrivateRoute>
          }
        />
        <Route
          path='/shop'
          element={
            <PrivateRoute>
              <Shop />
            </PrivateRoute>
          }>
          <Route
            path='/shop/:id'
            element={
              <PrivateRoute>
                <ProductDescription />
              </PrivateRoute>
            }
          />
        </Route>

        <Route
          path='/partner'
          element={
            <PrivateRoute>
              <Partner />
            </PrivateRoute>
          }
        />

        <Route
          path='/profile'
          element={
            <PrivateRoute>
              <Profile />
            </PrivateRoute>
          }
        />
      </Route>
    </Routes>
  );
}

export default App;
