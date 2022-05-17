import React from 'react';
import {ScrollView, StyleSheet, View, Image, Text} from 'react-native';
import {useSelector} from 'react-redux';
import {ContainerMain} from '../../components/home/ContainerMain';
import {LoveNotes} from '../../components/home/LoveNotes';

export const LoveNotesScreen = () => {
  const {notes} = useSelector(state => state.notes);
  const notesLove = notes.filter(note => note.love === true);
  return (
    <ContainerMain>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          {notesLove.length !== 0 ? (
            <LoveNotes notes={notesLove} />
          ) : (
            <View style={styles.containerNoNotes}>
              <Image
                source={require('../../imgs/notes/nolovesnotes.png')}
                style={styles.img}
              />
              <Text style={styles.message}>
                You don't have any note with "love it"
              </Text>
            </View>
          )}
        </View>
      </ScrollView>
    </ContainerMain>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    marginTop: 20,
  },
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
  containerNoNotes: {
    alignSelf: 'center',
    marginTop: 200,
  },
});
