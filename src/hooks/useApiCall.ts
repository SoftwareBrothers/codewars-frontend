import { AxiosResponse } from 'axios';
import { useState } from 'react';
import ajax from '../utils/ajax';

export enum Method {
  Post = 'post',
  Put = 'put',
  Patch = 'patch',
  Delete = 'delete',
  Get = 'get',
}

interface State<TResponse> {
  data?: TResponse;
  isPending: boolean;
  success?: boolean;
}

export interface UseApiCall<TObject, TResponse> extends State<TResponse> {
  trigger: (data?: TObject) => Promise<TResponse | false>;
}

interface UseApiCallConfig {
  method?: Method;
  authorize?: boolean;
}

const defaultUseApiCallConfig: UseApiCallConfig = {
  method: Method.Post,
  authorize: false,
};

export const getHeaders = (): Record<string, string> => {
  return {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  };
};

export const useApiCall = <TObject, TResponse = never>(
  url: string,
  apiCallConfig?: UseApiCallConfig,
): UseApiCall<TObject, TResponse> => {
  const [state, setState] = useState<State<TResponse>>({
    isPending: false,
    success: false,
  });

  const { method, authorize } = {
    ...defaultUseApiCallConfig,
    ...apiCallConfig,
  };

  const trigger = async (body?: TObject): Promise<TResponse | false> => {
    setState({
      isPending: true,
      success: false,
    });

    try {
      const { data } = await ajax.request<TObject, AxiosResponse<TResponse>>({
        url,
        method,
        data: body,
        headers: getHeaders(authorize ?? false),
      });

      setState({
        data,
        isPending: false,
        success: true,
      });

      return data;
    } catch (error) {
      setState({
        data: undefined,
        isPending: false,
        success: false,
      });

      throw error;
    }
  };

  return {
    ...state,
    trigger,
  };
};
