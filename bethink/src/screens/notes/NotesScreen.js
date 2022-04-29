import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import {ButtonAddNotes} from '../../components/notes/ButtonAddNotes';
import {CardNotes} from '../../components/notes/CardNotes';
import {PriorityNotes} from '../../components/notes/PriorityNotes';

export const NotesScreen = () => {
  return (
    <View style={styles.containerMain}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <View style={styles.containerCenter}>
            <Text style={styles.title}>Notes</Text>
          </View>
          <PriorityNotes />
          <CardNotes />
        </View>
      </ScrollView>
      <ButtonAddNotes />
    </View>
  );
};

const styles = StyleSheet.create({
  containerMain: {
    flex: 1,
    backgroundColor: '#231E41',
  },
  container: {
    marginHorizontal: 20,
  },
  title: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 25,
  },
  containerCenter: {
    alignItems: 'center',
    marginVertical: 20,
  },
});
