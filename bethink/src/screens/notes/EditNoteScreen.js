import React, {useState} from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import {ContainerMain} from '../../components/home/ContainerMain';
import {AddNote} from '../../components/notes/AddNote';
import {AddNoteName} from '../../components/notes/AddNoteName';
import {BtnEditNote} from '../../components/notes/BtnEditNote';
import {ModalCompleteForm} from '../../components/notes/ModalCompleteForm';
import {PriorityNote} from '../../components/notes/PriorityNote';
import {SecurityNote} from '../../components/notes/SecurityNote';
import {TitleNewNote} from '../../components/notes/TitleNewNote';
import {getDayCurrent} from '../../helpers/getDate';

const dayCurrent = getDayCurrent();

export const EditNoteScreen = ({navigation, route}) => {
  const {card} = route.params;
  const [formNote, setFormNote] = useState({
    id: card.id,
    title: card.title,
    love: card.love,
    security: card.security,
    date: dayCurrent,
    note: card.note,
    priority: card.priority,
    errors: false,
  });
  return (
    <ContainerMain>
      <ScrollView style={styles.container}>
        <AddNoteName navigation={navigation} title="Edit note" />
        <TitleNewNote formNote={formNote} setFormNote={setFormNote} />
        <SecurityNote formNote={formNote} setFormNote={setFormNote} />
        <AddNote formNote={formNote} setFormNote={setFormNote} />
        <PriorityNote formNote={formNote} setFormNote={setFormNote} />
        <BtnEditNote
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
});
