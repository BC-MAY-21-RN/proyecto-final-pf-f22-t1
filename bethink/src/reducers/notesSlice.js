import {createSlice} from '@reduxjs/toolkit';
import {getAllNotes} from '../actions/notes';

export const notesSlice = createSlice({
  name: 'notes',
  initialState: {
    notes: [],
    loadingNotes: true,
  },
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getAllNotes.fulfilled, (state, {payload}) => {
      state.notes = payload;
      state.loadingNotes = false;
    });
  },
});

export const {} = notesSlice.actions;

export default notesSlice.reducer;
