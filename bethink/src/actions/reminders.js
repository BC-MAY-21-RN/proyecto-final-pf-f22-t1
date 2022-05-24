import {createAsyncThunk} from '@reduxjs/toolkit';
import firestore from '@react-native-firebase/firestore';

export const getAllReminders = createAsyncThunk('reminders', async uid => {
  try {
    const reminders = firestore()
      .collection('Reminders')
      .where('user', '==', uid)
      .get()
      .then(querySnapshot => {
        const reminders = querySnapshot.docs.map(document => {
          return {
            id: document.id,
            ...document.data(),
          };
        });
        return reminders;
      });
    return reminders;
  } catch (error) {
    console.log(error);
  }
});