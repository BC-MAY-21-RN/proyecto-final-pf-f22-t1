import {createSlice} from '@reduxjs/toolkit';
import {getAllReminders} from '../actions/reminders';

export const remindersSlice = createSlice({
  name: 'reminders',
  initialState: {
    reminders: [],
    loadingNotes: true,
  },
  reducers: {
    resetRemindersState: state => {
      (state.reminders = []), (state.loadingNotes = true);
    },
  },
  extraReducers: builder => {
    builder.addCase(getAllReminders.fulfilled, (state, {payload}) => {
      state.reminders = payload;
      // state.loadingNotes = false;
    });
  },
});

export const {resetRemindersState} = remindersSlice.actions;

export default remindersSlice.reducer;
