import React from 'react';
import {Image, Text, StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';

export const DeleteMain = () => {
  const {mode} = useSelector(state => state.ui);
  return (
    <>
      <Image
        source={require('../../imgs/notes/deletenote.png')}
        style={styles.img}
      />
      <Text style={[styles.msg, mode === 'light' && styles.msgLight]}>
        Are you sure?
      </Text>
    </>
  );
};

const styles = StyleSheet.create({
  img: {
    width: 100,
    height: 100,
  },
  msg: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 20,
    marginTop: 15,
  },
  msgLight: {
    color: 'white',
  },
});
