import React from 'react';
import {ScrollView} from 'react-native';
import {ContainerMain} from '../../components/home/ContainerMain';
import {CardDone} from '../../components/reminders/Done/CardDone';
import {useSelector} from 'react-redux';
import {NoDone} from '../../components/reminders/Done/NoDone';
import { ModalEdit } from '../../components/reminders/ModalEdit';

export const RemindersScreenDone = ({navigation}) => {
  const {reminders} = useSelector(state => state.reminders);

  const remindersDone = reminders.filter(reminder => reminder.status == true);

  return (
    <ContainerMain>
      <ScrollView>
        {remindersDone.length > 0 ? (
          <CardDone listReminders={remindersDone} />
        ) : (
          <NoDone />
        )}
      </ScrollView>
      <ModalEdit navigation={navigation} />
    </ContainerMain>
  );
};
