import {createSlice} from '@reduxjs/toolkit';
import {getAllNotes} from '../actions/notes';

export const notesSlice = createSlice({
  name: 'notes',
  initialState: {
    notes: [],
  },
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getAllNotes.fulfilled, (state, {payload}) => {
      state.notes = payload;
    });
  },
});

export const {} = notesSlice.actions;

export default notesSlice.reducer;
