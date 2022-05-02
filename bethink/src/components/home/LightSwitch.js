import React from 'react';
import {TouchableOpacity, Animated} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {useAnimation} from '../../hooks/useAnimation';
import {switchStyles} from './switchStyles';

export const LightSwitch = () => {
  const {opacity, move, animation} = useAnimation(-38, 'dark');

  const onDarkMode = () => {
    animation();
  };
  return (
    <Animated.View style={[switchStyles.containerSwitch, {opacity: opacity}]}>
      <Icon name="sunny" color="#FFCE31" size={18} />
      <TouchableOpacity onPress={onDarkMode}>
        <Animated.View
          style={[
            switchStyles.btnDark,
            switchStyles.btnLight,
            {transform: [{translateX: move}]},
          ]}
        />
      </TouchableOpacity>
    </Animated.View>
  );
};
