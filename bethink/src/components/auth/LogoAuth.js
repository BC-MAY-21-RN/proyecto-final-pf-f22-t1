import React from 'react';
import {View, Image, StyleSheet} from 'react-native';
export const LogoAuth = ({splitScreen}) => {
  return (
    <View style={[styles.containerLogo, {height: splitScreen * 2}]}>
      <Image source={require('../../imgs/logo.png')} style={[styles.logo]} />
    </View>
  );
};

const styles = StyleSheet.create({
  containerLogo: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    maxHeight: 100,
    maxWidth: 350,
  },
});
