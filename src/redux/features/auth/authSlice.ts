import { createSlice } from '@reduxjs/toolkit';
import { userLogin, userLogout, userRegister } from './authAsyncActions';

export type AuthType = {
  loading: boolean;
  userData: any;
  isLoggedin: boolean;
};

export const initialState: AuthType = {
  loading: false,
  userData: {},
  isLoggedin: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // login
      .addCase(userLogin.pending, (state) => {
        state.loading = true;
        state.userData = {};
        state.isLoggedin = false;
      })
      .addCase(userLogin.fulfilled, (state, action) => {
        state.loading = false;
        state.userData = action.payload;
        state.isLoggedin = true;
      })
      .addCase(userLogin.rejected, (state, action) => {
        state.loading = false;
        state.userData = {};
        state.isLoggedin = false;
      })
      // register
      .addCase(userRegister.pending, (state) => {
        state.loading = true;
        state.userData = {};
        state.isLoggedin = false;
      })
      .addCase(userRegister.fulfilled, (state, action) => {
        state.loading = false;
        state.userData = action.payload;
        state.isLoggedin = true;
      })
      .addCase(userRegister.rejected, (state, action) => {
        state.loading = false;
        state.userData = {};
        state.isLoggedin = false;
      })
      //logout
      .addCase(userLogout.pending, (state) => {
        state.loading = true;
        state.userData = {};
        state.isLoggedin = false;
      })
      .addCase(userLogout.fulfilled, (state, action) => {
        localStorage.clear();
        state.loading = false;
        state.userData = {};
      })
      .addCase(userLogout.rejected, (state, action) => {
        state.loading = false;
        state.userData = {};
        state.isLoggedin = false;
      });
  },
});

export default authSlice.reducer;
