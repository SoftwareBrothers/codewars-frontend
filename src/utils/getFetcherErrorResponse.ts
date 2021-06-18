import { AxiosError } from 'axios';
import { ErrorResponse } from './types';

const getFetcherErrorResponse = <T>(
  error: AxiosError<T>,
  url: string,
): ErrorResponse => {
  const message = error.response
    ? JSON.stringify(error?.response?.data['message'])
    : error?.code;

  return {
    code: error?.response?.status ?? 500,
    message: message || '',
    url,
  };
};

export default getFetcherErrorResponse;
