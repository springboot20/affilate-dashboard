import React from 'react';
import { UserInterface } from './user.types';

export interface AuthContextType {
  tokens: {accessToken:string, refreshToken:string} | null;
  user: UserInterface | null;
  register: (values: { username: string; email: string; password: string }) => void;
  login: (values: { username?: string; email?: string; password: string }) => void;
  logout: () => void;
}

export type AuthContextProps = {
  children: React.ReactNode;
};
