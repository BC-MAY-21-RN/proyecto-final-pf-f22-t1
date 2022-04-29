import React, {useRef} from 'react';
import {TouchableOpacity, Animated} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {useDispatch} from 'react-redux';
import {toggleModeUi} from '../../reducers/uiSlice';
import {switchStyles} from './switchStyles';

export const LightSwitch = () => {
  const dispatch = useDispatch();
  const opacity = useRef(new Animated.Value(1)).current;
  const right = useRef(new Animated.Value(0)).current;

  const animation = () => {
    Animated.timing(opacity, {
      toValue: 0,
      duration: 500,
      useNativeDriver: true,
    }).start();
    Animated.timing(right, {
      toValue: -38,
      duration: 500,
      useNativeDriver: true,
    }).start(() => dispatch(toggleModeUi('dark')));
  };

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
            {transform: [{translateX: right}]},
          ]}
        />
      </TouchableOpacity>
    </Animated.View>
  );
};
