import React, {useState} from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import {useSelector} from 'react-redux';
import {ContainerMain} from '../../components/home/ContainerMain';
import {ButtonAddNotes} from '../../components/notes/ButtonAddNotes';
import {ConditionalNotes} from '../../components/notes/ConditionalNotes';
import {ModalPinNote} from '../../components/notes/ModalPinNote';
import {PriorityNotes} from '../../components/notes/PriorityNotes';
import { TitleNote } from '../../components/notes/TitleNote';

export const NotesScreen = ({navigation}) => {
  const {notes} = useSelector(state => state.notes);
  const [showModalPin, setShowModalPin] = useState(false);
  return (
    <ContainerMain>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <TitleNote />
          <PriorityNotes />
          <ConditionalNotes notes={notes} navigation={navigation} showModalPin={showModalPin} setShowModalPin={setShowModalPin}
          />
        </View>
      </ScrollView>
      <ModalPinNote showModalPin={showModalPin} navigation={navigation} setShowModalPin={setShowModalPin}
      />
      <ButtonAddNotes navigation={navigation} />
    </ContainerMain>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
  },
});
