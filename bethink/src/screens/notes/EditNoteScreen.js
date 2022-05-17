import React, {useState} from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import {ContainerMain} from '../../components/home/ContainerMain';
import {ContainerEditNote} from '../../components/notes/ContainerEditNote';
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
        <ContainerEditNote navigation={navigation} formNote={formNote} setFormNote={setFormNote}
        />
      </ScrollView>
    </ContainerMain>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
  },
});
