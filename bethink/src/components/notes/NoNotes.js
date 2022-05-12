import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
export const NoNotes = ({mode}) => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../imgs/notes/nonotes.png')}
        style={styles.img}
      />
      <Text style={[styles.txt, mode === 'light' && styles.txtLight]}>
        You don’t have any notes yet
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginVertical: 70,
  },
  img: {
    height: 200,
    width: 200,
  },
  txt: {
    marginTop: 20,
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },
  txtLight: {
    color: 'black',
  },
});
