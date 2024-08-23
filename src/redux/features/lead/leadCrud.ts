import axios from 'axios';

import { createLeadUrl, getAllLeadUrl } from '@/config/config';

export const createLeadFn = (data: any) => {
  return axios.post(createLeadUrl, data);
};

export const getAllLeadFn = () => {
  return axios.post(getAllLeadUrl);
};
