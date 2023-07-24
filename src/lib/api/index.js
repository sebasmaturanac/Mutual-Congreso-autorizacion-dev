import axios from 'axios';
import { baseURL } from '../../config/url';

const instance = axios.create({
  baseURL,
  responseType: 'json',
});

instance.interceptors.request.use(
  (config) => {
    config.headers.version = '{"product":"APP_ADMIN","release":"1.0.0"}';
    return config;
  },
  (error) => Promise.reject(error),
);

instance.interceptors.response.use(
  (response) => response.data,
  (error) => Promise.reject(error),
);

export default instance;
