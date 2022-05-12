import React from 'react';
import { View, Image, StyleSheet } from 'react-native'

export const Logo = () => {
  return (
    <View style={styles.containerCenter}>
      <Image source={require('../../imgs/logo.png')} style={styles.logo} />
    </View>
  );
};

const styles = StyleSheet.create({
  containerCenter: {
    alignItems: 'center',
  },
  logo: {
    height: 80,
    width: 150,
  },
});