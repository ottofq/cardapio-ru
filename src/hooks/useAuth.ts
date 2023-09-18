import type { AxiosError } from 'axios';
import React from 'react';

import { login } from '@/services/loginService';

import storage from '../storage';

type ErrorData = AxiosError<{
  error: string;
  message: string;
  statusCode: 'string';
}>;

type Data = {
  student: any;
  auth: {
    token: string;
  };
};

const useAuth = () => {
  const [token, setToken] = React.useState('');
  const [error, setError] = React.useState<string | null>(null);
  const [loading, setLoading] = React.useState(false);

  //   useEffect(() => {
  //     const storageToken = getTokenFromStorage();

  //     if (storageToken) setToken(storageToken);
  //   }, []);

  const removeTokenToStorage = () => {
    storage.removeItem('token');
  };

  const getTokenFromStorage = (): string => {
    return storage.getItem('token');
  };

  const setTokenToStorage = (token: string) => {
    storage.setItem('token', token);
  };

  const singIn = async ({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) => {
    try {
      setLoading(true);
      const response = await login({ email, password });
      setToken(response.data.auth.token);
      setLoading(false);
    } catch (e) {
      setLoading(false);
      setError(e.response.data.message);
      throw Error(e.response.data.message);
    }
  };

  const signOut = () => {
    setToken('');
    removeTokenToStorage();
  };

  return {
    loading,
    error,
    token,
    signOut,
    singIn,
  };
};

export default useAuth;
