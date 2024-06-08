import { createAsyncThunk } from '@reduxjs/toolkit';

export const createAsyncThunkForSlice = (
  type: string,
  resolver: any,
  options?: { isEncrypt?: boolean; isToast?: boolean; extraParam?: boolean }
) =>
  createAsyncThunk(
    type,
    async (payload: any, { dispatch, rejectWithValue }) => {
      try {
        const res: any = await resolver(payload, options?.extraParam);
        console.log('res', res);
        //*** option?.isToast && setToast message ***//
      } catch (error: any) {
        //*** option?.isToast && setToast message ***//
        return rejectWithValue(error.message);
      }
    }
  );

export default createAsyncThunkForSlice;
