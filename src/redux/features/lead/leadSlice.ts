import { createSlice } from '@reduxjs/toolkit';
import { createLead, geteLeads } from './leadAsyncActions';


export const initialState: any = {
  loading: false,
  createLeadData:{},
  getAllLeadData: {},
};

export const leadSlice = createSlice({
  name: 'lead',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // create Lead
      .addCase(createLead.pending, (state) => {
        state.loading = true;
        state.createLeadData = {};
      })
      .addCase(createLead.fulfilled, (state, action) => {
        state.loading = false;
        state.createLeadData = action.payload;
      })
      .addCase(createLead.rejected, (state, action) => {
        state.loading = false;
        state.createLeadData = {};
      })

      // get lead
      .addCase(geteLeads.pending, (state) => {
        state.loading = true;
        state.getAllLeadData = {};
      })
      .addCase(geteLeads.fulfilled, (state, action) => {
        state.loading = false;
        state.getAllLeadData = action.payload;
      })
      .addCase(geteLeads.rejected, (state, action) => {
        state.loading = false;
        state.getAllLeadData = {};
      })
  },
});

export default leadSlice.reducer;
