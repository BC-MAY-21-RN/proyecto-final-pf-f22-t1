import React from 'react';
import {View, StyleSheet, Text, Image, TouchableOpacity} from 'react-native';
import dayjs from 'dayjs';
import {getDateBy, getTimeBy} from '../../helpers/getDate';
import {useDispatch} from 'react-redux';
import {openModalEdit, setReminderEdit} from '../../reducers/remindersSlice';

export const CardReminders = ({card}) => {
  const {date} = card;
  const formatDate = dayjs.unix(date.seconds);
  const [time, amORpm] = getTimeBy(formatDate).split(' ');
  const dispatch = useDispatch();

  const onEdit = () => {
    dispatch(setReminderEdit({...card, date: formatDate}));
    dispatch(openModalEdit());
  };

  return (
    <TouchableOpacity style={styles.containerCard} onPress={onEdit}>
      <Image
        source={require('../../imgs/reminder/Red-Alarm.png')}
        style={styles.alarm}
      />
      <View style={styles.containerTitle}>
        <Text style={styles.title}>{card.title}</Text>
        <Text style={styles.txtDate}>{getDateBy(formatDate)}</Text>
      </View>
      <View>
        <Text style={styles.time}>{time}</Text>
        <Text style={styles.meridian}>{amORpm}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  containerCard: {
    alignSelf: 'center',
    height: 115,
    width: 350,
    marginVertical: 10,
    borderRadius: 20,
    padding: 20,
    justifyContent: 'space-between',
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',

    shadowColor: 'red',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.5,
    shadowRadius: 10.49,

    elevation: 12,
  },
  title: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 20,
    alignSelf: 'center',
  },
  containerTitle: {
    height: 60,
    alignSelf: 'center',
    justifyContent: 'space-between',
  },
  date: {
    color: 'black',
    opacity: 0.3,
  },
  alarm: {
    height: 60,
    width: 60,
  },
  time: {
    color: '#FC5C7D',
    fontWeight: 'bold',
    fontSize: 30,
  },
  meridian: {
    fontSize: 20,
    color: '#FC5C7D',
    alignSelf: 'center',
  },
  txtDate: {
    color: 'grey',
  },
});
