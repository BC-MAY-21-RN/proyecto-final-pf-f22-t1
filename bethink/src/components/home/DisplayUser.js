import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {DarkSwitch} from './DarkSwitch';
// import {LightSwitch} from './LightSwitch';

export const DisplayUser = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.txtUser}>Hello, John</Text>
      <DarkSwitch />
      {/* <LightSwitch /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  txtUser: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },
});
