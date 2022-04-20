import React from 'react';
import {View, TextInput, Text} from 'react-native';
import {formStyles} from '../auth/formStyles';
import {InputAuth} from '../auth/InputAuth';

export const FormRegister = ({form, onChange}) => {
  const {name, email, password} = form;
  return (
    <View style={formStyles.containerForm}>
      <InputAuth label="Name" onChange={onChange} valueInput={name} />
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
