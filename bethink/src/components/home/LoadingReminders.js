import React, {useEffect} from 'react';
import {StyleSheet, View, Animated} from 'react-native';
import {useAnimationSkeleto} from '../../hooks/useAnimationSkeleto';


const data = [1, 2, 3];

export const LoadingReminders = () => {
  const {opacity, animation} = useAnimationSkeleto();
  useEffect(() => {
    animation();
  }, []);

  return (
    <View style={styles.container}>
      {data.map(skeleton => (
        <Animated.View
          key={skeleton}
          style={[styles.containerSkeleton, {opacity: opacity}]}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  containerSkeleton: {
    height: 170,
    width: 130,
    backgroundColor: 'rgba(255,255,255,0.4)',
    borderRadius: 10,
    marginVertical: 5,
    marginHorizontal: 10
  },
  container: {
    flexDirection: 'row',
  },
});
