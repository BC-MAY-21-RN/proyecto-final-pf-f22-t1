import React from 'react';
import {StyleSheet, TouchableOpacity, Text, Image, View} from 'react-native';

export const ButtonsAuth = ({txtBtn, txtBtnGoogle, form, navigation}) => {
  /* use this for validations */
  // const {name, email, password} = form;
  const currentScreen = navigation.getState().index;
  const onAuth = () => {
    if (currentScreen === 0) {
      console.log('login');
    } else {
      console.log('register');
    }
  };
  return (
    <View style={styles.containerButtons}>
      <TouchableOpacity style={styles.button} onPress={onAuth}>
        <Text style={styles.txtButton}>{txtBtn}</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.button, styles.buttonGoogle]}>
        <Image
          source={require('../../imgs/google.png')}
          style={styles.imgGoogle}
        />
        <Text style={styles.txtButton}>{txtBtnGoogle}</Text>
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
