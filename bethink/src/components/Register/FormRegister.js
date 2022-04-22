import React from 'react';
import {View, TextInput, Text} from 'react-native';
import {useSelector} from 'react-redux';
import {formStyles} from '../auth/formStyles';
import {InputAuth} from '../auth/InputAuth';
import {MsgValidation} from '../auth/MsgValidation';

export const FormRegister = ({form, onChange}) => {
  const {name, email, password} = form;
  const {msgErrorRegister} = useSelector(state => state.ui);
  return (
    <View style={formStyles.containerForm}>
      <InputAuth label="Name" onChange={onChange} valueInput={name} />
      {msgErrorRegister && <MsgValidation msg="Name is incorrect" />}
      <InputAuth label="Email" onChange={onChange} valueInput={email} />
      {msgErrorRegister && <MsgValidation msg="Email is incorrect" />}
      <Text style={formStyles.label}>Password</Text>
      <TextInput
        style={formStyles.input}
        secureTextEntry
        value={password}
        onChangeText={value => onChange(value, 'password')}
      />
      {msgErrorRegister && <MsgValidation msg="Password is incorrect" />}
    </View>
  );
};
