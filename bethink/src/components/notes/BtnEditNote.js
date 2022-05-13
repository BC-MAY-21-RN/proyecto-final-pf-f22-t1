import React from 'react';
import firestore from '@react-native-firebase/firestore';
import {BtnSave} from './BtnSave';

export const BtnEditNote = ({formNote, setFormNote, navigation}) => {
  const {title, note} = formNote;
  const updateNote = async () => {
    const {id, ...updateNote} = formNote;
    try {
      await firestore().collection('Notes').doc(id).update(updateNote);
    } catch (error) {
      console.log(error);
    }
  };

  const updateNoteFirebase = () => {
    if (title.length === 0 || note.length === 0) {
      setFormNote({...formNote, errors: true});
    } else {
      updateNote();
      navigation.navigate('HomeAPP');
    }
  };
  return <BtnSave action={updateNoteFirebase} />;
};
