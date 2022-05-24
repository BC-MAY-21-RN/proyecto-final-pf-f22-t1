import React, {useState} from 'react';
import {ScrollView, StyleSheet, TextInput} from 'react-native';
import {ContainerMain} from '../../components/home/ContainerMain';
import {BtnAddReminder} from '../../components/reminders/BtnAddReminder';
import {DateReminder} from '../../components/reminders/DateReminder';
import {ModalCompleteReminders} from '../../components/reminders/ModalCompleteReminders';
import {TitleReminder} from '../../components/reminders/TitleReminder';

export const NewReminderScreen = () => {
  const [title, setTitle] = useState('');
  const [date, setDate] = useState(new Date());
  const [errors, setErrors] = useState(false);
  return (
    <ContainerMain>
      <ScrollView style={styles.container}>
        <TitleReminder title={title} setTitle={setTitle} />
        <DateReminder date={date} setDate={setDate} />
        <BtnAddReminder title={title} date={date} setErrors={setErrors} />
      </ScrollView>
      <ModalCompleteReminders errors={errors} setErrors={setErrors} />
    </ContainerMain>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    marginVertical: 20,
  },
});
