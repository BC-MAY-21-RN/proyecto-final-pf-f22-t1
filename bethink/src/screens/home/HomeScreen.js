import React from 'react';
import {View, Image, StyleSheet} from 'react-native';
import {Date} from '../../components/home/Date';
import {DisplayUser} from '../../components/home/DisplayUser';

export const HomeScreen = () => {
  return (
    <View style={styles.containerMain}>
      <View style={styles.container}>
      <View style={styles.containerCenter}>
        <Image source={require('../../imgs/logo.png')} style={styles.logo} />
      </View>
      <DisplayUser />
      <View style={styles.containerCenter}>
        <Date />
      </View>

      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  containerMain: {
    flex: 1,
    backgroundColor: '#231E41',
    // marginHorizontal: 20,
  },
  containerCenter: {
    alignItems: 'center',
  },
  logo: {
    height: 80,
    width: 150,
  },
  container: {
    marginHorizontal: 20,
  }
});
