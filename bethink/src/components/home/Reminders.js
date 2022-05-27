import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import dayjs from 'dayjs';
import {useSelector} from 'react-redux';
import LinearGradient from 'react-native-linear-gradient';
import {SectionName} from './SectionName';
import {getDateBy, getTimeBy} from '../../helpers/getDate';
import {NoMore} from './NoMore';
import {LoadingReminders} from './LoadingReminders';
import {NoReminders} from './NoReminders';


export const Reminders = () => {
  const {reminders, loadingReminders} = useSelector(state => state.reminders);
  const remindersFormat = reminders.map(reminder => {
    const formatDate = dayjs.unix(reminder.date.seconds);
    return {
      ...reminder,
      date: formatDate,
    };
  });

  const remindersForToday = remindersFormat.filter(reminder => {
    const today = getDateBy(new Date());
    const dayReminder = getDateBy(reminder.date);
    return dayReminder === today;
  });

  const cardReminders = ({item}) => {
    const [time, amOrPm] = getTimeBy(item.date).split(' ');
    return (
      <LinearGradient
        colors={['#CC2B5E', '#0ABFBC']}
        style={styles.containerCard}>
        <Text style={styles.txtTime}>{time}</Text>
        <Text style={styles.txtTime}>{amOrPm}</Text>
        <Text style={styles.txtAct}>{item.title}</Text>
      </LinearGradient>
    );
  };

  return (
    <View style={styles.container}>
      <SectionName text="Reminders for today" />
      {loadingReminders ? (
        <LoadingReminders />
      ) : remindersForToday.length > 0 ? (
        <FlatList
          data={remindersForToday}
          keyExtractor={item => item.id}
          renderItem={cardReminders}
          horizontal
          ListFooterComponent={<NoMore />}
        />
      ) : (
        <NoReminders />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  containerCard: {
    height: 170,
    width: 130,
    margin: 10,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  txtTime: {
    color: 'white',
    fontSize: 32,
  },
  txtAct: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 15,
  },
});
