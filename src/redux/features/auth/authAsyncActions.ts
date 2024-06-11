import createAsyncThunkForSlice from '@/lib/asyncthunk';
import { login, logout, register } from './authCrud';
import { loginType, logoutType, registerType } from '@/app/types/asyncActions';

export const userLogin = createAsyncThunkForSlice(loginType, login, {
  isToast: true,
});

export const userRegister = createAsyncThunkForSlice(registerType, register, {
  isToast: true,
});

export const userLogout = createAsyncThunkForSlice(logoutType, logout, {
  isToast: true,
});
