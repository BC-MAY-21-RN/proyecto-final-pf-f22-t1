import {createAsyncThunk} from '@reduxjs/toolkit';
import firestore from '@react-native-firebase/firestore';

export const getAllNotes = createAsyncThunk('notes', async uid => {
  try {
    const notes = firestore()
      .collection('Notes')
      .where('user', '==', uid)
      .get()
      .then(querySnapshot => {
        const notes = querySnapshot.docs.map(document => {
          return {
            id: document.id,
            ...document.data(),
          };
        });
        return notes;
      });
    return notes;
    // return []
  } catch (error) {
    console.log(error);
  }
});
