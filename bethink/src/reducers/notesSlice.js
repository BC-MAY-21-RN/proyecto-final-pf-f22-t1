import {createSlice} from '@reduxjs/toolkit';
import {getAllNotes} from '../actions/notes';

export const notesSlice = createSlice({
  name: 'notes',
  initialState: {
    notes: [],
    loadingNotes: true,
    noteSecurity: [],
  },
  reducers: {
    resetNotesState: state => {
      (state.notes = []), (state.loadingNotes = true);
    },
    noteToPin: (state, {payload}) => {
      state.noteSecurity = payload;
    },
    removeNoteToPin: state => {
      state.noteSecurity = [];
    },
  },
  extraReducers: builder => {
    builder.addCase(getAllNotes.fulfilled, (state, {payload}) => {
      state.notes = payload;
      state.loadingNotes = false;
    });
  },
});

export const {resetNotesState, noteToPin, removeNoteToPin} = notesSlice.actions;

export default notesSlice.reducer;
