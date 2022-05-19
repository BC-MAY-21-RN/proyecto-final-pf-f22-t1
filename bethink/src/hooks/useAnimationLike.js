import {useRef} from 'react';
import {Animated} from 'react-native';

export const useAnimationLike = setShowAnimation => {
  const move = useRef(new Animated.Value(250)).current;
  const opacity = useRef(new Animated.Value(1)).current;
  const animation = () => {
    Animated.timing(move, {toValue: 50,duration: 1000,useNativeDriver: true,}).start();
    Animated.timing(opacity, {toValue: 0,duration: 1000,useNativeDriver: true,
    }).start(() => {
      setShowAnimation(false);
      move.setValue(250);
      opacity.setValue(1);
    });
  };
  return {
    opacity,
    move,
    animation,
  };
};
