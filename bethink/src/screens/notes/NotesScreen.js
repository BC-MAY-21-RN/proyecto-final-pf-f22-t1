import React, {useState} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import {useSelector} from 'react-redux';
import {ContainerMain} from '../../components/home/ContainerMain';
import {ButtonAddNotes} from '../../components/notes/ButtonAddNotes';
import {CardNotes} from '../../components/notes/CardNotes';
import {ModalPinNote} from '../../components/notes/ModalPinNote';
import {NoNotes} from '../../components/notes/NoNotes';
import {PriorityNotes} from '../../components/notes/PriorityNotes';

export const NotesScreen = ({navigation}) => {
  const {mode} = useSelector(state => state.ui);
  const {notes} = useSelector(state => state.notes);
  const [showModalPin, setShowModalPin] = useState(false);
  return (
    <ContainerMain>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <View style={styles.containerCenter}>
            <Text style={[styles.title, mode === 'light' && styles.titleLight]}>
              Notes
            </Text>
          </View>
          <PriorityNotes />
          {notes.length > 0 ? (
            <CardNotes
              notes={notes}
              navigation={navigation}
              showModalPin={showModalPin}
              setShowModalPin={setShowModalPin}
            />
          ) : (
            <NoNotes mode={mode} />
          )}
        </View>
      </ScrollView>
      <ModalPinNote
        showModalPin={showModalPin}
        navigation={navigation}
        setShowModalPin={setShowModalPin}
      />
      <ButtonAddNotes navigation={navigation} />
    </ContainerMain>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
  },
  title: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 25,
  },
  titleLight: {
    color: 'black',
  },
  containerCenter: {
    alignItems: 'center',
    marginVertical: 20,
  },
});
