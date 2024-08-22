import axios from 'axios';

import { createLeadUrl } from '@/config/config';

export const createLead = (data: any) => {
  return axios.post(createLeadUrl, data);
};

// export const register = (data: any) => {
//   return axios.post(registerUrl, data);
// };

// export const logout = (data: any) => {
//   return axios.post(logoutUrl, data);
// };
