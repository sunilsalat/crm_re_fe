import createAsyncThunkForSlice from '@/lib/asyncthunk';
import { leadType, loginType, logoutType, registerType } from '@/app/types/asyncActions';
import { createLeadFn } from './leadCrud';

export const createLead = createAsyncThunkForSlice(leadType, createLeadFn, {
  isToast: true,
});

// export const userRegister = createAsyncThunkForSlice(registerType, register, {
//   isToast: true,
// });

// export const userLogout = createAsyncThunkForSlice(logoutType, logout, {
//   isToast: true,
// });
