import React from 'react';
import {ScrollView} from 'react-native';
import {ContainerMain} from '../../components/home/ContainerMain';
import {CardDone} from '../../components/reminders/Done/CardDone';
import {useSelector} from 'react-redux';
import {NoDone} from '../../components/reminders/Done/NoDone';

export const RemindersScreenDone = () => {
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
    </ContainerMain>
  );
};
