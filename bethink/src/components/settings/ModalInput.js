import React from 'react';
import {Text, TextInput, StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';
export const ModalInput = ({setPassword, password}) => {
  const {mode} = useSelector(state => state.ui);
  return (
    <>
      <Text style={[styles.label, mode === 'light' && styles.labelLight]}>
        Password
      </Text>
      <TextInput
        value={password}
        onChangeText={setPassword}
        style={[styles.input, mode === 'light' && styles.inputLight]}
        placeholder="****"
        keyboardType="numeric"
        maxLength={4}
        secureTextEntry
        placeholderTextColor="gray"
      />
    </>
  );
};

const styles = StyleSheet.create({
  label: {
    color: 'black',
    fontWeight: 'bold',
  },
  input: {
    borderWidth: 1,
    borderRadius: 10,
    color: 'black',
    marginVertical: 5,
    borderColor: '#231E41',
    padding: 10,
  },
  labelLight: {
    color: 'white',
  },
  inputLight: {
    backgroundColor: 'white',
  },
});
