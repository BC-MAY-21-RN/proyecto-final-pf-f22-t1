import {configureStore} from '@reduxjs/toolkit';
import authReducer from '../reducers/authSlice';
import notesReducer from '../reducers/notesSlice';
import remindersReducer from '../reducers/remindersSlice';
import uiReducer from '../reducers/uiSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    ui: uiReducer,
    notes: notesReducer,
    reminders: remindersReducer
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
