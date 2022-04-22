import React from 'react';
import {TouchableOpacity, Image, Text} from 'react-native';
import {useDispatch} from 'react-redux';
import {loginWithGoogle} from '../../actions/auth';
import {buttonsStyles} from './buttonsStyles';

export const ButtonGoogle = ({txtBtnGoogle}) => {
  const dispatch = useDispatch();
  const onAuthGoogle = async () => {
    dispatch(loginWithGoogle());
  };
  return (
    <TouchableOpacity
      style={[buttonsStyles.button, buttonsStyles.buttonGoogle]}
      onPress={onAuthGoogle}>
      <Image
        source={require('../../imgs/google.png')}
        style={buttonsStyles.imgGoogle}
      />
      <Text style={buttonsStyles.txtButton}>{txtBtnGoogle}</Text>
    </TouchableOpacity>
  );
};
