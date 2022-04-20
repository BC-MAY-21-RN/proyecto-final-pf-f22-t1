import React from 'react';
import {View, Text, TextInput} from 'react-native';
import {formStyles} from '../auth/formStyles';
import {InputAuth} from '../auth/InputAuth';

export const FormLogin = ({form, onChange}) => {
  const {email, password} = form;
  return (
    <View style={formStyles.containerForm}>
      <InputAuth label="Email" onChange={onChange} valueInput={email} />
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
