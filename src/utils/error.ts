import { AxiosError } from 'axios';

export const getApiErrorMessage = (e: AxiosError): string => {
  const message = e.response?.data?.message;

  if (typeof message === 'string') {
    return message;
  }
  return e.response?.data?.error ?? e.message;
};
