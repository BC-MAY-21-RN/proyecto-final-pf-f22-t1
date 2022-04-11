import React from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';

export const FormLogin = () => {
  return (
    <View style={styles.containerForm}>
      <Text style={styles.label}>Email</Text>
      <TextInput style={styles.input} />
      <Text style={styles.label}>Password</Text>
      <TextInput style={styles.input} />
    </View>
  );
};

const styles = StyleSheet.create({
  containerForm: {
    marginVertical: 15,
  },
  label: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },

  input: {
    backgroundColor: 'white',
    borderRadius: 10,
    marginVertical: 5,
    color: 'black',
    padding: 10,
  },
});
