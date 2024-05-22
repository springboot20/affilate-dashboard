import { lazy } from 'react';

export const AppLayout = lazy(() => import('../layout/AppLayout'));
export const Profile = lazy(() => import('../pages/Profile'));
export const Shop = lazy(() => import('../pages/Shop'));
export const AddProduct = lazy(() => import('../pages/AddProduct'));
export const ProductDescription = lazy(() => import('../pages/card/CardDescription'));
export const PrivateRoute = lazy(() => import('../routes/components/Private.routes'));
export const PublicRoute = lazy(() => import('../routes/components/Public.routes'));
export const Partner = lazy(() => import('../pages/Partner'));
export const Dashboard = lazy(() => import('../pages/Dashboard'));
export const Login = lazy(() => import('../pages/sign-forms/Login'));
export const Register = lazy(() => import('../pages/sign-forms/Register'));
export const NotFound = lazy(() => import('../components/NotFound'));
