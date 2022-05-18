import React from 'react';
import {ScrollView, StyleSheet, View, Image, Text} from 'react-native';
import {useSelector} from 'react-redux';
import {ContainerMain} from '../../components/home/ContainerMain';
import {LoveNotes} from '../../components/home/LoveNotes';
import {SectionName} from '../../components/home/SectionName';
import {ConditionalLoveNotes} from '../../components/loveNotes/ConditionalLoveNotes';
import {ModalPinNote} from '../../components/notes/ModalPinNote';

export const LoveNotesScreen = ({navigation}) => {
  const {notes} = useSelector(state => state.notes);
  const {mode} = useSelector(state => state.ui);
  const notesLove = notes.filter(note => note.love === true);
  return (
    <ContainerMain>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <Text style={[styles.title, mode === 'light' && styles.titleLight]}>
            Love notes
          </Text>
          <ConditionalLoveNotes notesLove={notesLove} navigation={navigation} />
        </View>
      </ScrollView>
      <ModalPinNote navigation={navigation} />
    </ContainerMain>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    marginTop: 20,
  },

  title: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  titleLight: {
    color: 'black',
  },
});
