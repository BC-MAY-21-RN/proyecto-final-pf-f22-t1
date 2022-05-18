import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {useDispatch, useSelector} from 'react-redux';
import { removeNoteToPin } from '../../reducers/notesSlice';
import { setModalPin } from '../../reducers/uiSlice';
import {stylesBtnPin} from './btnStyles';
export const BtnEntry = ({pin, setPin, setShowErrors, navigation}) => {
  const {noteSecurity} = useSelector(state => state.notes);
  const {security} = useSelector(state => state.ui);
  const dispatch = useDispatch();

  const onVerifyPin = () => {
    if (pin.length < 4) return;
    if (pin === security.password) {
      navigation.navigate('Notes', {screen: 'EditNote', params: {card: noteSecurity}});
      dispatch(setModalPin(false))
      dispatch(removeNoteToPin());
      setPin('');
    } else {
      setShowErrors(true);
    }
  };

  return (
    <TouchableOpacity style={stylesBtnPin.btnNumber} onPress={onVerifyPin}>
      <Text style={stylesBtnPin.txtNumber}>
        <Icon name="enter-outline" color="#5DE3C3" size={25} />
      </Text>
    </TouchableOpacity>
  );
};
