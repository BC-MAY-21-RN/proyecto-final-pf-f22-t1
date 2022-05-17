import React from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';
export const TitleNoteCard = ({title}) => {
  return (
    <View style={styles.containerTitle}>
      <Image
        source={require('../../imgs/notes/notes.png')}
        style={styles.imgCard}
      />
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  title: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 20,
    marginLeft: 15,
  },
  imgCard: {
    height: 50,
    width: 50,
  },
  containerTitle: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
