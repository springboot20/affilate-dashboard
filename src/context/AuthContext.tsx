import { createContext, useState } from 'react';
import { AuthContextType, AuthContextProps } from '../types/context.types';
import { UserInterface } from '../types/user.types';
import { apiRequestHandler, LocalStorage } from '../utils/api';
import { register, login, logout } from '../api/axios.config';
import { Navigate } from 'react-router-dom';
import { Loader } from '../components/Loader';

export const AuthContext = createContext<AuthContextType>({
  tokens: null,
  user: null,
  register: async () => Promise<void>,
  login: async () => Promise<void>,
  logout: async () => Promise<void>,
});

export const AuthProvider = ({ children }: AuthContextProps) => {
  const [user, setUser] = useState<UserInterface | null>({} as UserInterface);
  const [tokens, setTokens] = useState<{ accessToken: string; refreshToken: string } | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const registerUser = async (values: { username: string; email: string; password: string }) => {
    await apiRequestHandler({
      api: async () => await register(values),
      setLoading: setLoading,
      onSuccess: (res) => {
        const { data } = res;
        setUser(data.user);

        console.log(data);
        return <Navigate to='/auth/register' />;
      },
      onError: (error, toast) => {
        toast(error);
      },
    });
  };

  const loginUser = async (values: { username?: string; email?: string; password: string }) => {
    await apiRequestHandler({
      api: async () => await login(values),
      setLoading: setLoading,
      onSuccess: (res, message, toast) => {
        const { data } = res;

        setUser(data.user);
        setTokens(data.tokens);
        LocalStorage.set('tokens', data.tokens);

        toast(message);
      },
      onError: (error, toast) => {
        toast(error);
      },
    });
  };

  const logoutUser = async () => {
    await apiRequestHandler({
      api: async () => await logout(),
      setLoading: setLoading,
      onSuccess: (__, message, toast) => {
        setUser(null);
        setTokens(null);

        toast(message);
      },
      onError: (error, toast) => {
        toast(error);
      },
    });
  };
  return (
    <AuthContext.Provider
      value={{
        user,
        tokens,
        register: registerUser,
        login: loginUser,
        logout: logoutUser,
      }}>
      {loading ? <Loader /> : children}
    </AuthContext.Provider>
  );
};
