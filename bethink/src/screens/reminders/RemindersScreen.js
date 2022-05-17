import React from 'react';
import {useSelector} from 'react-redux';
import {StyleSheet, Text, ScrollView} from 'react-native';
import {ContainerMain} from '../../components/home/ContainerMain';
import {CardsReminders} from '../../components/reminders/CardsReminders';
export const RemindersScreen = () => {
  const {mode} = useSelector(state => state.ui);
  return (
    <ContainerMain>
      <ScrollView>
        <Text style={[styles.title, mode === 'light' && styles.titleLight]}>
          Reminders
        </Text>
        <CardsReminders />
      </ScrollView>
    </ContainerMain>
  );
};
const styles = StyleSheet.create({
  title: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 25,
  },
});
