import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Date} from './Date';
import {DisplayUser} from './DisplayUser';
import {Logo} from './Logo';
export const SectionMain = () => {
  return (
    <>
      <Logo />
      <DisplayUser />
      <View style={styles.center}>
        <Date />
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  center: {
    alignItems: 'center',
  },
});
