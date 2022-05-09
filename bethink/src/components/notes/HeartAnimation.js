import React from 'react';
import {View, Animated, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const heartData = [
  {
    id: 1,
    size: 45,
  },
  {
    id: 2,
    size: 25,
  },
  {
    id: 3,
    size: 65,
  },
  {
    id: 4,
    size: 35,
  },
];

export const HeartAnimation = ({move, opacity}) => {
  return (
    <Animated.View
      style={[
        styles.animate,
        {transform: [{translateY: move}], opacity: opacity},
      ]}>
      <View style={styles.animatedHeart}>
        {heartData.map(heart => (
          <Icon name="heart" color="#FC5C7D" size={heart.size} key={heart.id} />
        ))}
      </View>
      <View style={styles.animatedHeart}>
        {heartData.reverse().map(heart => (
          <Icon name="heart" color="#FC5C7D" size={heart.size} key={heart.id} />
        ))}
      </View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  animate: {
    height: 250,
    width: 350,
    position: 'absolute',
    bottom: -500,
  },
  animatedHeart: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});
