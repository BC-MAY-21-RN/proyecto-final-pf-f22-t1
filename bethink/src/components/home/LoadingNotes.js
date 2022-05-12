import React, {useEffect} from 'react';
import {StyleSheet, View, Animated} from 'react-native';
import {useAnimationSkeleto} from '../../hooks/useAnimationSkeleto';
import {SectionName} from './SectionName';

const data = [1, 2, 3, 4, 5];

export const LoadingNotes = () => {
  const {opacity, animation} = useAnimationSkeleto();
  useEffect(() => {
    animation();
  }, []);

  return (
    <View style={styles.container}>
      <SectionName text="I love it" />
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
    height: 50,
    backgroundColor: 'rgba(255,255,255,0.4)',
    borderRadius: 10,
    marginVertical: 5,
  },
});
