import React from 'react';
import {StyleSheet, TouchableOpacity, Text, Image, View} from 'react-native';

export const ButtonLogin = () => {
  return (
    <View style={styles.containerButtons}>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.txtButton}>Log in</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.button, styles.buttonGoogle]}>
        <Image
          source={require('../../imgs/google.png')}
          style={styles.imgGoogle}
        />
        <Text style={styles.txtButton}>Log in with Google</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  containerButtons: {
    alignItems: 'center',
  },
  button: {
    borderColor: 'white',
    borderWidth: 1,
    height: 50,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    width: 270,
    marginVertical: 10,
  },
  txtButton: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 23,
  },
  buttonGoogle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  imgGoogle: {
    height: 30,
    width: 30,
  },
});
