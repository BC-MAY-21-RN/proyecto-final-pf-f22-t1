import React from 'react';
import {View, StyleSheet, Text, Image, TouchableOpacity} from 'react-native';
// import Icon from 'react-native-vector-icons/Ionicons';
import {useDispatch, useSelector} from 'react-redux';
import {noteToPin} from '../../reducers/notesSlice';
import FingerprintScanner from 'react-native-fingerprint-scanner';
import {CardListNote} from './CardListNote';

const msgFingerPrint = {
  description: 'Scan your fingerprint to access to the note',
  cancelButton: 'Cancel',
};

export const CardNotes = ({notes, navigation, setShowModalPin}) => {
  const {security} = useSelector(state => state.ui);
  const dispatch = useDispatch();
  const onViewNote = card => {
    if (security.mode === 'pin' && card.security === true) {
      setShowModalPin(true);
      dispatch(noteToPin(card));
    } else if (security.mode === 'biometric' && card.security === true) {
      onFingerPrint(card);
    } else {
      navigation.navigate('EditNote', {card});
    }
  };
  const onFingerPrint = async card => {
    try {
      await FingerprintScanner.authenticate(msgFingerPrint);
      FingerprintScanner.release();
      navigation.navigate('EditNote', {card});
    } catch (error) {
      FingerprintScanner.release();
    }
  };

  return notes.map(card => (
    <CardListNote key={card.id} card={card} onViewNote={onViewNote} />
  ));
};
