import createAsyncThunkForSlice from '@/lib/asyncthunk';
import { getLeadType, leadType } from '@/app/types/asyncActions';
import { createLeadFn, getAllLeadFn } from './leadCrud';

export const createLead = createAsyncThunkForSlice(leadType, createLeadFn, {
  isToast: true,
});

export const geteLeads = createAsyncThunkForSlice(getLeadType, getAllLeadFn, {
  isToast: false,
});

