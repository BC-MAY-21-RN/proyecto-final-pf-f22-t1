import {createSlice} from '@reduxjs/toolkit';
import {getAllReminders} from '../actions/reminders';

export const remindersSlice = createSlice({
  name: 'reminders',
  initialState: {
    reminders: [],
    loadingReminders: true,
    reminderEdit: [],
  },
  reducers: {
    resetRemindersState: state => {
      (state.reminders = []), (state.loadingReminders = true);
    },
    openModalEdit: state => {
      state.modalEdit = true;
    },
    closeModalEdit: state => {
      state.modalEdit = false;
      state.reminderEdit = [];
    },
    setReminderEdit: (state, {payload}) => {
      state.reminderEdit = payload;
    },
  },
  extraReducers: builder => {
    builder.addCase(getAllReminders.fulfilled, (state, {payload}) => {
      state.reminders = payload;
      state.loadingReminders = false;
    });
  },
});

export const {
  resetRemindersState,
  openModalEdit,
  setReminderEdit,
  closeModalEdit,
} = remindersSlice.actions;

export default remindersSlice.reducer;
