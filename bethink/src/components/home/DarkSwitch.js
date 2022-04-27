import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {switchStyles} from './switchStyles';

export const DarkSwitch = () => {
  return (
    <View style={switchStyles.containerSwitch}>
      <TouchableOpacity style={switchStyles.btnDark} />
      <Icon name="moon" color="#E50CF8" size={18} />
    </View>
  );
};
