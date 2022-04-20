import React from 'react';
import {Text, TextInput} from 'react-native';
import {formStyles} from './formStyles';
export const InputAuth = ({label, valueInput, onChange}) => {
  return (
    <>
      <Text style={formStyles.label}>{label}</Text>
      <TextInput
        style={formStyles.input}
        value={valueInput}
        onChangeText={value => onChange(value, label.toLowerCase())}
      />
    </>
  );
};
