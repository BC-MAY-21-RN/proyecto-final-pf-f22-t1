import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {stylesBtnPin} from './btnStyles';

export const BtnDelete = ({pin, setPin}) => {
  const onRemovePin = () => {
    if (pin.length >= 0) {
      const newPin = pin.slice(0, pin.length - 1);
      return setPin(newPin);
    }
  };

  return (
    <TouchableOpacity style={stylesBtnPin.btnNumber} onPress={onRemovePin}>
      <Text style={stylesBtnPin.txtNumber}>
        <Icon name="backspace-outline" color="#FC5C7D" size={25} />
      </Text>
    </TouchableOpacity>
  );
};
