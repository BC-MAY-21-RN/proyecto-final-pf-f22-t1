import {createAsyncThunk} from '@reduxjs/toolkit';
import firestore from '@react-native-firebase/firestore';

export const getAllNotes = createAsyncThunk('notes', async uid => {
  try {
    const notes = await firestore()
      .collection('Notes')
      .where('user', '==', uid)
      .get();
    const allnotes = notes._docs.map(note => note._data);
    return allnotes;
  } catch (error) {
    console.log(error);
  }
});
