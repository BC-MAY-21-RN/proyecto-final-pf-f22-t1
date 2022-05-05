import {useRef} from 'react';
import {Animated} from 'react-native';
import {useDispatch} from 'react-redux';
import {toggleModeUi} from '../reducers/uiSlice';

export const useAnimation = (toMove, changeModeUi) => {
  const dispatch = useDispatch();
  const opacity = useRef(new Animated.Value(1)).current;
  const move = useRef(new Animated.Value(0)).current;

  const animation = () => {
    Animated.timing(opacity, {
      toValue: 0,
      duration: 500,
      useNativeDriver: true,
    }).start();
    Animated.timing(move, {
      toValue: toMove,
      duration: 500,
      useNativeDriver: true,
    }).start(() => dispatch(toggleModeUi(changeModeUi)));
  };
  return {
    opacity,
    move,
    animation,
  };
};
