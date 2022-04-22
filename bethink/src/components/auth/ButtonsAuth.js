import React from 'react';
import {TouchableOpacity, Text, View} from 'react-native';

import {ButtonGoogle} from './ButtonGoogle.js';
import {buttonsStyles} from './buttonsStyles.js';

export const ButtonsAuth = ({txtBtn, txtBtnGoogle, onAuth, enableBtn}) => {
  return (
    <View style={buttonsStyles.containerButtons}>
      <TouchableOpacity
        style={buttonsStyles.button}
        onPress={onAuth}
        disabled={enableBtn}>
        <Text style={buttonsStyles.txtButton}>{txtBtn}</Text>
      </TouchableOpacity>
      <ButtonGoogle txtBtnGoogle={txtBtnGoogle} />
    </View>
  );
};
