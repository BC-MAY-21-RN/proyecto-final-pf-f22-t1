import React from 'react';
import {Text, ScrollView} from 'react-native';
import {ContainerMain} from '../../components/home/ContainerMain';
import {CardDone} from '../../components/reminders/Done/CardDone';
export const RemindersScreenDone = () => {
  return (
    <ContainerMain>
      <ScrollView>
        <CardDone />
      </ScrollView>
    </ContainerMain>
  );
};
