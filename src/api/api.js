import axios from "axios";
import { getAuthToken } from './tokenHelper';


export const api = axios.create({
  baseURL: 'http://vrkableuat.vcqru.com/api/',
  headers: {
    'Content-Type': 'application/json',
  },
});


api.interceptors.request.use(
  (config) => {
    const token = getAuthToken();
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
