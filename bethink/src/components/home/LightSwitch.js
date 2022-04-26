import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {switchStyles} from './switchStyles';

export const LightSwitch = () => {
  return (
    <View style={switchStyles.containerSwitch}>
      <Icon name="sunny" color="#FFCE31" size={18} />
      <TouchableOpacity style={switchStyles.btnLight} />
    </View>
  );
};
