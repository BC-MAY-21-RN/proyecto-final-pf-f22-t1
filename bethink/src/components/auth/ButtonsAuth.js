import React from 'react';
import {StyleSheet, TouchableOpacity, Text, Image, View} from 'react-native';
import {useDispatch} from 'react-redux';
import {
  loginWithEmailAndPassword,
  loginWithGoogle,
  registerWithEmailAndPassword,
} from '../../actions/auth.js';
import {
  validationLogin,
  validationRegister,
} from '../../helpers/validationAuth.js';
import {
  removeMsgError,
  setMsgErrorLogin,
  setMsgErrorRegister,
} from '../../reducers/uiSlice.js';

export const ButtonsAuth = ({txtBtn, txtBtnGoogle, form, navigation}) => {
  const {name, email, password} = form;
  const currentScreen = navigation.getState().index;
  const dispatch = useDispatch();
  const onAuth = () => {
    if (currentScreen === 0) {
      if (!validationLogin(email, password)) {
        dispatch(setMsgErrorLogin());
        return;
      }
      dispatch(removeMsgError());
      dispatch(loginWithEmailAndPassword({email, password}));
    } else {
      if (!validationRegister(name, email, password)) {
        dispatch(setMsgErrorRegister());
        return;
      }
      dispatch(removeMsgError());
      dispatch(registerWithEmailAndPassword({name, email, password}));
    }
  };

  const onAuthGoogle = async () => {
    dispatch(loginWithGoogle());
  };

  return (
    <View style={styles.containerButtons}>
      <TouchableOpacity style={styles.button} onPress={onAuth}>
        <Text style={styles.txtButton}>{txtBtn}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button, styles.buttonGoogle]}
        onPress={onAuthGoogle}>
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
