import React from 'react';
import {TouchableOpacity, Animated} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {useAnimation} from '../../hooks/useAnimation';
import {switchStyles} from './switchStyles';

export const DarkSwitch = () => {
  const {opacity, move, animation} = useAnimation(38, 'light');

  const onLightMode = () => {
    animation();
  };

  return (
    <Animated.View style={[switchStyles.containerSwitch, {opacity: opacity}]}>
      <TouchableOpacity onPress={onLightMode}>
        <Animated.View
          style={[switchStyles.btnDark, {transform: [{translateX: move}]}]}
        />
      </TouchableOpacity>
      <Icon name="moon" color="#E50CF8" size={18} />
    </Animated.View>
  );
};
