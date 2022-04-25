import React from 'react';
import {View, Image, StyleSheet} from 'react-native';

export const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.containerLogo}>
        <Image source={require('../../imgs/logo.png')} style={styles.logo} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#231E41',
  },
  containerLogo: {
    alignItems: 'center',
  },
  logo: {
    height: 80,
    width: 150,
  },
});
