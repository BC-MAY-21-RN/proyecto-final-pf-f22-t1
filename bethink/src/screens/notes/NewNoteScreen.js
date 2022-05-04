import React, {useState} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {ContainerMain} from '../../components/home/ContainerMain';

import Icon from 'react-native-vector-icons/Ionicons';
import {TitleNewNote} from '../../components/notes/TitleNewNote';
import {SecurityNote} from '../../components/notes/SecurityNote';
import {AddNote} from '../../components/notes/AddNote';
import {PriorityNote} from '../../components/notes/PriorityNote';

export const NewNoteScreen = ({navigation}) => {
  const [title, setTitle] = useState('');
  const [priority, setPriority] = useState('low');
  return (
    <ContainerMain>
      <View style={styles.container}>
        <View style={styles.containerSection}>
          <Icon
            name="arrow-back-outline"
            color="#FC5C7D"
            size={45}
            onPress={() => navigation.goBack()}
          />
          <Text style={styles.title}>New note</Text>
        </View>
        <TitleNewNote title={title} setTitle={setTitle} />
        <SecurityNote />
        <AddNote />
        <PriorityNote priority={priority} setPriority={setPriority} />
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
