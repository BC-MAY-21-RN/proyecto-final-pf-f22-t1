import React from 'react';
import {useSelector} from 'react-redux';
import {StyleSheet, Text, ScrollView} from 'react-native';
import {ContainerMain} from '../../components/home/ContainerMain';
import {CardsReminders} from '../../components/reminders/CardsReminders';
import {ButtonAddReminders} from '../../components/reminders/ButtonAddReminders';
import {NavigationReminders} from '../../components/reminders/NavigationReminders';
export const RemindersScreenToDo = () => {
  const {mode} = useSelector(state => state.ui);
  return (
    <ContainerMain>
      <Text style={[styles.title, mode === 'light' && styles.titleLight]}>
        Reminders
      </Text>
      <NavigationReminders />
      <ScrollView>
        <CardsReminders />
      </ScrollView>
      <ButtonAddReminders />
    </ContainerMain>
  );
};
const styles = StyleSheet.create({
  title: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 25,
    alignSelf: 'center',
    marginTop: 20,
  },
});
