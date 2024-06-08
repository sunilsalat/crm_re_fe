import axios from 'axios';

import { loginUrl, logoutUrl, registerUrl } from '@/config/config';

export const login = (data: any) => {
  return axios.post(loginUrl, data);
};

export const register = (data: any) => {
  return axios.post(registerUrl, data);
};

export const logout = (data: any) => {
  return axios.post(logoutUrl, data);
};
