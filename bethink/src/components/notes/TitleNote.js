import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';
export const TitleNote = () => {
  const {mode} = useSelector(state => state.ui);
  return (
    <View style={styles.containerCenter}>
      <Text style={[styles.title, mode === 'light' && styles.titleLight]}>
        Notes
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 25,
  },
  titleLight: {
    color: 'black',
  },
  containerCenter: {
    alignItems: 'center',
    marginVertical: 20,
  },
});
