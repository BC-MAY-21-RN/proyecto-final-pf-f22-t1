import React, {useState} from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';

import {ContainerMain} from '../../components/home/ContainerMain';

import {TitleNewNote} from '../../components/notes/TitleNewNote';
import {SecurityNote} from '../../components/notes/SecurityNote';
import {AddNote} from '../../components/notes/AddNote';
import {PriorityNote} from '../../components/notes/PriorityNote';
import {AddNoteName} from '../../components/notes/AddNoteName';
import {BtnAddNote} from '../../components/notes/BtnAddNote';
import {getDayCurrent} from '../../helpers/getDate';
import {ModalCompleteForm} from '../../components/notes/ModalCompleteForm';

const dayCurrent = getDayCurrent();

const initialForm = {
  title: '',
  love: false,
  security: false,
  date: dayCurrent,
  note: '',
  priority: 'low',
  errors: false,
};

export const NewNoteScreen = ({navigation}) => {
  const [formNote, setFormNote] = useState(initialForm);
  return (
    <ContainerMain>
      <ScrollView style={styles.container}>
        <AddNoteName navigation={navigation} />
        <TitleNewNote formNote={formNote} setFormNote={setFormNote} />
        <SecurityNote formNote={formNote} setFormNote={setFormNote} />
        <AddNote formNote={formNote} setFormNote={setFormNote} />
        <PriorityNote formNote={formNote} setFormNote={setFormNote} />
        <BtnAddNote
          formNote={formNote}
          setFormNote={setFormNote}
          navigation={navigation}
        />
        <ModalCompleteForm formNote={formNote} setFormNote={setFormNote} />
      </ScrollView>
    </ContainerMain>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
  },
  containerSection: {
    flexDirection: 'row',
    marginTop: 20,
  },
  title: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
    marginLeft: 50,
  },
});
