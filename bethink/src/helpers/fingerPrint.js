import FingerprintScanner from 'react-native-fingerprint-scanner';
import {setModalPin} from '../reducers/uiSlice';
import {noteToPin} from '../reducers/notesSlice';

export const onFingerPrint = async (card, navigation) => {
  try {
    await FingerprintScanner.authenticate({
      description: 'Scan your fingerprint to access to the note',
      cancelButton: 'Cancel',
    });
    FingerprintScanner.release();
    navigation.navigate('Notes', {screen: 'EditNote', params: {card}});
  } catch (error) {
    FingerprintScanner.release();
  }
};

export const onViewNote = (card, security, dispatch, navigation) => {
  if (security.mode === 'pin' && card.security === true) {
    dispatch(setModalPin(true));
    dispatch(noteToPin(card));
  } else if (security.mode === 'biometric' && card.security === true) {
    onFingerPrint(card, navigation);
  } else {
    navigation.navigate('Notes', {screen: 'EditNote', params: {card}});
  }
};
