// axiosInstance.js
import axios from 'axios';
import { baseUrl } from './config/config';

const axiosInstance = axios.create({
  baseURL: baseUrl, // Replace with your API base URL
  withCredentials: true, // This ensures that cookies are sent with requests
});

// Add a request interceptor
axiosInstance.interceptors.request.use(
  (config) => {
    // Modify config as needed
    config.headers['Content-Type'] = 'application/json';
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Add a response interceptor
axiosInstance.interceptors.response.use(
  (response) => {
    // Handle response data as needed
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
