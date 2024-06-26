import axios from 'axios';
import { LocalStorage } from '../utils/api';

const productAppApiClient = axios.create({
  baseURL: 'http://localhost:4500/api/v1',
  timeout: 12000,
});

productAppApiClient.interceptors.response.use(
  (config) => {
    const token = LocalStorage.get('token');
    config.headers.Authorization = `Bearer ${token}`;

    return config;
  },
  (error) => {
    if (error.response.status === 401) {
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

export const register = (data: { username: string; password: string; email: string }) =>
  productAppApiClient.post('/auth/users/register', data);

export const login = (data: {username?:string, email?: string; password: string }) =>
  productAppApiClient.post('/auth/users/login', data);

export const logout = () => productAppApiClient.post('/auth/users/logout');
