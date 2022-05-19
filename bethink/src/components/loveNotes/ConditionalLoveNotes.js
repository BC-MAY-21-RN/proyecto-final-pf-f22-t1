import React from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';
import {LoveNotes} from '../home/LoveNotes';

export const ConditionalLoveNotes = ({notesLove, navigation}) => {
  const {mode} = useSelector(state => state.ui);
  return (
    <>
      {notesLove.length !== 0 ? (
        <LoveNotes notes={notesLove} navigation={navigation} />
      ) : (
        <>
          <View style={styles.containerNoNotes}>
            <Image
              source={require('../../imgs/notes/nolovesnotes.png')}
              style={styles.img}
            />
            <Text
              style={[styles.message, mode === 'light' && styles.messageLight]}>
              You don't have any note with "love it"
            </Text>
          </View>
        </>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  img: {
    width: 150,
    height: 150,
    alignSelf: 'center',
  },
  message: {
    color: 'white',
    fontWeight: 'bold',
    marginTop: 10,
  },
  messageLight: {
    color: 'black',
  },
  containerNoNotes: {
    alignSelf: 'center',
    marginTop: 200,
  },
});
