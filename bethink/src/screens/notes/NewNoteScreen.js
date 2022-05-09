import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import dayjs from 'dayjs';
import {ContainerMain} from '../../components/home/ContainerMain';

import {TitleNewNote} from '../../components/notes/TitleNewNote';
import {SecurityNote} from '../../components/notes/SecurityNote';
import {AddNote} from '../../components/notes/AddNote';
import {PriorityNote} from '../../components/notes/PriorityNote';
import {AddNoteName} from '../../components/notes/AddNoteName';
import {BtnAddNote} from '../../components/notes/BtnAddNote';

const dayCurrent = dayjs().format('DD/MMMM/YYYY');
const dayFormat = dayCurrent.replace('/', ' ').replace('/', ', ');

const initialForm = {
  title: '',
  love: false,
  security: false,
  date: dayFormat,
  note: '',
  priority: 'low',
};

export const NewNoteScreen = ({navigation}) => {
  const [formNote, setFormNote] = useState(initialForm);
  console.log(formNote);
  return (
    <ContainerMain>
      <View style={styles.container}>
        <AddNoteName navigation={navigation} />
        <TitleNewNote formNote={formNote} setFormNote={setFormNote} />
        <SecurityNote formNote={formNote} setFormNote={setFormNote} />
        <AddNote formNote={formNote} setFormNote={setFormNote} />
        <PriorityNote formNote={formNote} setFormNote={setFormNote} />
        <BtnAddNote formNote={formNote} />
      </View>
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
