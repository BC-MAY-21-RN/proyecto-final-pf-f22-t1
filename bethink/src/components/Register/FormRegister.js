import React from 'react';
import {View, TextInput, Text, StyleSheet} from 'react-native';

export const FormRegister = () => {
  return (
    <View style={styles.containerForm}>
      <Text style={styles.label}>Name</Text>
      <TextInput style={styles.input} />
      <Text style={styles.label}>Email</Text>
      <TextInput style={styles.input} />
      <Text style={styles.label}>Password</Text>
      <TextInput style={styles.input} />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    backgroundColor: 'white',
    borderRadius: 10,
    marginVertical: 5,
    color: 'black',
    padding: 10,
  },
  containerForm: {
    marginVertical: 15,
  },
  label: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },
});
