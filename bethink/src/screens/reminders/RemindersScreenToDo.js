import React from 'react';
import {ScrollView} from 'react-native';
import {ContainerMain} from '../../components/home/ContainerMain';
import {CardsReminders} from '../../components/reminders/CardsReminders';
import {ButtonAddReminders} from '../../components/reminders/ButtonAddReminders';
export const RemindersScreenToDo = ({navigation}) => {
  return (
    <ContainerMain>
      <ScrollView>
        <CardsReminders />
      </ScrollView>
      {/* <ButtonAddReminders navigation={navigation} /> */}
    </ContainerMain>
  );
};
