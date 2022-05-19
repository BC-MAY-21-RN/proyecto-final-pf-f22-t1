import React from 'react';
import {Text, ScrollView} from 'react-native';
import {ContainerMain} from '../../components/home/ContainerMain';
import {CardDone} from '../../components/reminders/Done/CardDone';
import {ButtonAddReminders} from '../../components/reminders/ButtonAddReminders';
export const RemindersScreenDone = () => {
  return (
    <ContainerMain>
      <ScrollView>
        <CardDone />
      </ScrollView>
      <ButtonAddReminders />
    </ContainerMain>
  );
};
