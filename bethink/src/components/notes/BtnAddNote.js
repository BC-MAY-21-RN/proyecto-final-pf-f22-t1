import React from 'react';
import firestore from '@react-native-firebase/firestore';
import {useSelector} from 'react-redux';
import { BtnSave } from './BtnSave';

export const BtnAddNote = ({formNote, setFormNote, navigation}) => {
  const {title, note} = formNote;
  const {uid} = useSelector(state => state.auth);
  const addNoteFirebase = async () => {
    try {
      await firestore()
        .collection('Notes')
        .add({...formNote, user: uid});
    } catch (error) {
      console.log(error);
    }
  };

  const addNote = () => {
    if (title.length === 0 || note.length === 0) {
      setFormNote({...formNote, errors: true});
    } else {
      addNoteFirebase();
      navigation.navigate('HomeAPP');
    }
  };
  return (
    <BtnSave action={addNote} />
  );
};

