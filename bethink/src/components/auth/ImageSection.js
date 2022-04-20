import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
const loginImage = require('../../imgs/login.png');
const registerImage = require('../../imgs/register.png');

export const ImageSection = ({section}) => {
  return (
    <View style={styles.containerImg}>
      <Image
        source={section.includes('Log') ? loginImage : registerImage}
        style={styles.img}
      />
      <Text style={styles.title}>{section}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  containerImg: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  img: {
    height: 150,
    width: 150,
  },
  title: {
    color: 'black',
    fontSize: 35,
    fontWeight: 'bold',
  },
});
