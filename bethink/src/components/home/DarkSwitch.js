import React, {useRef} from 'react';
import {TouchableOpacity, Animated} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {useDispatch} from 'react-redux';
import {toggleModeUi} from '../../reducers/uiSlice';
import {switchStyles} from './switchStyles';

export const DarkSwitch = () => {
  const dispatch = useDispatch();
  const opacity = useRef(new Animated.Value(1)).current;
  const left = useRef(new Animated.Value(0)).current;

  const animation = () => {
    Animated.timing(opacity, {
      toValue: 0,
      duration: 500,
      useNativeDriver: true,
    }).start();
    Animated.timing(left, {
      toValue: 38,
      duration: 500,
      useNativeDriver: true,
    }).start(() => dispatch(toggleModeUi('light')));
  };

  const onLightMode = () => {
    animation();
  };

  return (
    <Animated.View style={[switchStyles.containerSwitch, {opacity: opacity}]}>
      <TouchableOpacity onPress={onLightMode}>
        <Animated.View
          style={[switchStyles.btnDark, {transform: [{translateX: left}]}]}
        />
      </TouchableOpacity>
      <Icon name="moon" color="#E50CF8" size={18} />
    </Animated.View>
  );
};
