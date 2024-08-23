import { combineReducers } from '@reduxjs/toolkit';

import loginReducer, {
  initialState as authInitialState,
} from '../features/auth/authSlice';

import leadReducer from '../features/lead/leadSlice';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

const persistConfig = {
  storage,
  key: 'crm-user',
  whitelist: ['userData', 'isLoggedin'],
};

const peristedLoginReducer = persistReducer(persistConfig, loginReducer);

const rootReducer: any = (state: any, action: any) => {
  if (action.type === 'RESET_STATE') {
    // Clear the persisted state
    state = {
      // auth: authInitialState,
    };
  }

  return combineReducers({
    auth: peristedLoginReducer,
    lead:leadReducer
  })(state, action);
};

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
