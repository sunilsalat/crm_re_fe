import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosResponse } from 'axios';
import toast from 'react-hot-toast';

export const createAsyncThunkForSlice = (
  type: string,
  resolver: any,
  options?: { isEncrypt?: boolean; isToast?: boolean; extraParam?: boolean }
) =>
  createAsyncThunk(
    type,
    async (payload: any, { dispatch, rejectWithValue }) => {
      try {
        const res: AxiosResponse = await resolver(payload, options?.extraParam);
        if (res.status === 200 || 201) {
          options?.isToast && toast.success(res.data?.msg);
          return res.data;
        } else {
          options?.isToast && toast.error('Something Went Wrong');
          throw new Error('Something Went Wrong');
        }
      } catch (error: any) {
        options?.isToast && toast.error(error.message);
        return rejectWithValue(error.message);
      }
    }
  );

export default createAsyncThunkForSlice;
