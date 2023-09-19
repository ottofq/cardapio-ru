import type { AxiosError } from 'axios';
import { useRouter } from 'expo-router';
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

  const router = useRouter();

  React.useEffect(() => {
    const storageToken = getTokenFromStorage();

    if (storageToken) setToken(storageToken);
  }, []);

  const removeDataToStorage = () => {
    storage.removeItem('token');
    storage.removeItem('id');
  };

  const getTokenFromStorage = (): string => {
    return storage.getItem('token');
  };

  const setDataToStorage = (tkn: string, id: String) => {
    storage.setItem('token', tkn);
    storage.setItem('id', id);
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
      const tkn = response.data.auth.token;
      const _id = response.data.student._id;
      setToken(tkn);
      setDataToStorage(tkn, _id);
      setLoading(false);
    } catch (e) {
      setLoading(false);
      setError(e.response.data.message);
      throw Error(e.response.data.message);
    }
  };

  const signOut = () => {
    setToken('');
    removeDataToStorage();
    router.replace('/');
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
