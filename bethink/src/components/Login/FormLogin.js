import React from 'react';
import {View, Text, TextInput} from 'react-native';
import {formStyles} from '../auth/formStyles';

export const FormLogin = ({form, onChange}) => {
  const {email, password} = form;
  return (
    <View style={formStyles.containerForm}>
      <Text style={formStyles.label}>Email</Text>
      <TextInput
        style={formStyles.input}
        value={email}
        onChangeText={value => onChange(value, 'email')}
      />
      <Text style={formStyles.label}>Password</Text>
      <TextInput
        style={formStyles.input}
        secureTextEntry
        value={password}
        onChangeText={value => onChange(value, 'password')}
      />
    </View>
  );
};
