import {configureStore} from '@reduxjs/toolkit';
import authReducer from '../reducers/authSlice';
import uiReducer from '../reducers/uiSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    ui: uiReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
