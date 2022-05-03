import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {useSelector} from 'react-redux';
export const SectionName = ({text}) => {
  const {mode} = useSelector(state => state.ui);
  return (
    <Text style={[styles.txt, mode === 'light' && styles.txtLight]}>
      {text}
    </Text>
  );
};

const styles = StyleSheet.create({
  txt: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },
  txtLight: {
    color: 'black',
  },
});
