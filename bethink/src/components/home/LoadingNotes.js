import React, {useEffect, useRef} from 'react';
import {StyleSheet, View, Animated} from 'react-native';
import {SectionName} from './SectionName';

const data = [1, 2, 3, 4, 5];

export const LoadingNotes = () => {
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
