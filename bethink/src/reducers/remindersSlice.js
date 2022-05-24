import {createSlice} from '@reduxjs/toolkit';
import {getAllReminders} from '../actions/reminders';

export const remindersSlice = createSlice({
  name: 'reminders',
  initialState: {
    reminders: [],
    loadingNotes: true,
  },
  reducers: {
    // resetNotesState: state => {
    //   (state.notes = []), (state.loadingNotes = true);
    // },
  },
  extraReducers: builder => {
    builder.addCase(getAllReminders.fulfilled, (state, {payload}) => {
      // console.log(payload);
      state.reminders = payload;
      // state.loadingNotes = false;
    });
  },
});

export const {} = remindersSlice.actions;

export default remindersSlice.reducer;
