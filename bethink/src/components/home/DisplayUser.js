import React from 'react';
import {View, StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';
import {DarkSwitch} from './DarkSwitch';
import {LightSwitch} from './LightSwitch';
import {SectionName} from './SectionName';

export const DisplayUser = () => {
  const {mode} = useSelector(state => state.ui);
  const {name} = useSelector(state => state.auth);
  const [first] = name.split(' ')
  const firstLetter = first.charAt(0);
  const [, restant] = first.split(firstLetter)
  return (
    <View style={styles.container}>
      <SectionName text={`Hello, ${firstLetter}${restant.toLowerCase()}`} />
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
