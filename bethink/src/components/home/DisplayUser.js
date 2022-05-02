import React from 'react';
import {View, StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';
import {DarkSwitch} from './DarkSwitch';
import {LightSwitch} from './LightSwitch';
import {SectionName} from './SectionName';

export const DisplayUser = () => {
  const {mode} = useSelector(state => state.ui);
  return (
    <View style={styles.container}>
      <SectionName text="Hello, John" />
      {mode === 'dark' ? <DarkSwitch /> : <LightSwitch />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
});
