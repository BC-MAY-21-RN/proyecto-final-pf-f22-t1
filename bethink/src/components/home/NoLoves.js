import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {SectionName} from './SectionName';
export const NoLoves = () => {
  return (
    <View>
      <SectionName text="I love it" />
      <Image
        source={require('../../imgs/home/noloves.png')}
        style={styles.img}
      />
      <Text style={styles.msg}>The notes you "love" will show up here.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  img: {
    height: 120,
    width: 120,
    alignSelf: 'center',
    marginVertical: 15,
  },
  msg: {
    alignSelf: 'center',
    fontWeight: 'bold',
    color: 'gray',
  },
});
