import { ApiResponseObj } from '../types/api.type';
import { toast } from 'react-toastify';

export const apiRequestHandler = async ({
  api,
  setLoading,
  onSuccess,
  onError,
}: ApiResponseObj) => {
  setLoading && setLoading(true);

  try {
    const response = await api();
    const { data } = response;
    if (data?.success) {
      onSuccess(data, data.message, toast);
    }
  } catch (error: any) {
    if ([401, 403].includes(error?.response?.data.statusCode)) {
      LocalStorage.clear();
      if (isBrowser) window.location.href = '/auth/register';
    }
    onError(error?.response?.data?.message, toast);
  } finally {
    setLoading && setLoading(false);
  }
};

export class LocalStorage {
  static get(key: string) {
    if (!isBrowser) return;
    const value = localStorage.getItem(key);
    if (value) {
      return JSON.parse(value);
    }
    return null;
  }

  static set(key: string, value: any) {
    if (!isBrowser) return;
    localStorage.setItem(key, JSON.stringify(value));
  }

  static remove(key: string): void {
    if (!isBrowser) return;
    localStorage.removeItem(key);
  }
  static clear(): void {
    localStorage.clear();
  }
}

export const isBrowser = typeof window !== 'undefined';
