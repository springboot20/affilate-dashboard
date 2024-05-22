import { Routes, Route, Navigate } from 'react-router-dom';

import {
  Profile,
  Shop,
  AddProduct,
  ProductDescription,
  PrivateRoute,
  Partner,
  Dashboard,
} from '../lazy.import';

export default function AppRouter() {
  return (
    <Routes>
      <Route path='/' element={<Navigate to='/' />} />
      <Route path='/login' element={<Navigate to='/login' />} />
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
    </Routes>
  );
}
