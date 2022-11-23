import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import { getToken } from './token';

import { URL_API, REQUEST_TIMEOUT } from '../const';

export const createApi = (): AxiosInstance => {
  const api = axios.create({
    baseURL: URL_API,
    timeout: REQUEST_TIMEOUT,
  });

  api.interceptors.request.use(
    (config: AxiosRequestConfig) => {
      const token = getToken();

      if (token && config.headers) {
        config.headers['x-token'] = token;
      }

      return config;
    },
  );

  return api;
};
