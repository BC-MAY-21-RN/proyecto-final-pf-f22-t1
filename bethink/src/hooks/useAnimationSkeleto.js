import {useRef} from 'react';
import {Animated} from 'react-native';

export const useAnimationSkeleto = () => {
  const opacity = useRef(new Animated.Value(1)).current;
  const animation = () => {
    Animated.loop(
      Animated.timing(opacity, {
        toValue: 0,
        useNativeDriver: true,
        duration: 1500,
      }),
    ).start();
  };
  return {
    opacity,
    animation,
  };
};
