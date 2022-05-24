import React from 'react';
import {View, Image, StyleSheet, Text} from 'react-native';
import {useSelector} from 'react-redux';

export const NoDone = () => {
  const {mode} = useSelector(state => state.ui);
  return (
    <View style={styles.noReminders}>
      <Image
        source={require('../../../imgs/reminder/done.png')}
        style={styles.img}
      />
      <Text style={[styles.msg, mode === 'light' && styles.msgLight]}>
        No reminders completed
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  img: {
    height: 150,
    width: 150,
  },
  noReminders: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    height: 450,
  },
  msg: {
    color: 'white',
    marginTop: 20,
    fontWeight: 'bold',
  },
  msgLight: {
    color: 'black',
  },
});
