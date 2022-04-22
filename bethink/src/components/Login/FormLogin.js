import React from 'react';
import {View, Text, TextInput} from 'react-native';
import {useSelector} from 'react-redux';
import {formStyles} from '../auth/formStyles';
import {InputAuth} from '../auth/InputAuth';
import {MsgValidation} from '../auth/MsgValidation';

export const FormLogin = ({form, onChange}) => {
  const {email, password} = form;
  const {msgErrorLogin} = useSelector(state => state.ui);
  return (
    <View style={formStyles.containerForm}>
      <InputAuth label="Email" onChange={onChange} valueInput={email} />
      {msgErrorLogin && <MsgValidation msg="Email is incorrect" />}
      <Text style={formStyles.label}>Password</Text>
      <TextInput
        style={formStyles.input}
        secureTextEntry
        value={password}
        onChangeText={value => onChange(value, 'password')}
      />
      {msgErrorLogin && <MsgValidation msg="Password is incorrect" />}
    </View>
  );
};
