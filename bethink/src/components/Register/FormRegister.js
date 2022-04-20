import React from 'react';
import {View, TextInput, Text} from 'react-native';
import {formStyles} from '../auth/formStyles';

export const FormRegister = ({form, onChange}) => {
  const {name, email, password} = form;
  return (
    <View style={formStyles.containerForm}>
      <Text style={formStyles.label}>Name</Text>
      <TextInput
        style={formStyles.input}
        value={name}
        onChangeText={value => onChange(value, 'name')}
      />
      <Text style={formStyles.label}>Email</Text>
      <TextInput
        style={formStyles.input}
        autoCapitalize="none"
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
