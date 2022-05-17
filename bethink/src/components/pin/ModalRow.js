import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import {stylesBtnPin} from './btnStyles';
export const ModalRow = ({onChangePin, number}) => {
  return (
    <TouchableOpacity
      style={stylesBtnPin.btnNumber}
      onPress={() => onChangePin(number)}>
      <Text style={stylesBtnPin.txtNumber}>{number}</Text>
    </TouchableOpacity>
  );
};
