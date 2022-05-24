import React from 'react';
import {ScrollView} from 'react-native';
import {useSelector} from 'react-redux';
import {ContainerMain} from '../../components/home/ContainerMain';
import {CardsReminders} from '../../components/reminders/CardsReminders';
import {NoTodo} from '../../components/reminders/NoTodo';
export const RemindersScreenToDo = () => {
  const {reminders} = useSelector(state => state.reminders);

  const remindersTodo = reminders.filter(reminder => reminder.status == false);

  return (
    <ContainerMain>
      <ScrollView>
        {remindersTodo.length > 0 ? (
          <CardsReminders listReminders={remindersTodo} />
        ) : (
          <NoTodo />
        )}
      </ScrollView>
    </ContainerMain>
  );
};
