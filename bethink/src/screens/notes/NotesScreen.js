import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import {useSelector} from 'react-redux';
import {ContainerMain} from '../../components/home/ContainerMain';
import {ButtonAddNotes} from '../../components/notes/ButtonAddNotes';
import {CardNotes} from '../../components/notes/CardNotes';
import {PriorityNotes} from '../../components/notes/PriorityNotes';

export const NotesScreen = () => {
  const {mode} = useSelector(state => state.ui);
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
          <CardNotes />
        </View>
      </ScrollView>
      <ButtonAddNotes />
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
