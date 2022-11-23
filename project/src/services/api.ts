import axios, { AxiosInstance } from 'axios';

import { URL_API, REQUEST_TIMEOUT } from '../const';

export const createApi = (): AxiosInstance => {
  const api = axios.create({
    baseURL: URL_API,
    timeout: REQUEST_TIMEOUT,
  });

  return api;
};
