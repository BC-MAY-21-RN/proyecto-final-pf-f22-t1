import React from 'react';
import {View, StyleSheet, Text, Image, TouchableOpacity} from 'react-native';
import dayjs from 'dayjs';
import { useDispatch } from 'react-redux';
import {getDateBy} from '../../../helpers/getDate';
import { openModalEdit, setReminderEdit } from '../../../reducers/remindersSlice';

export const CardsDone = ({card}) => {
  const {date} = card;
  const formatDate = dayjs.unix(date.seconds);
  const dispatch = useDispatch();
  
  const onEdit = () => {
    dispatch(setReminderEdit({...card, date: formatDate}));
    dispatch(openModalEdit());
  };
  return (
    <TouchableOpacity style={styles.containerCard} onPress={onEdit}>
      <Image
        source={require('../../../imgs/reminder/check.png')}
        style={styles.check}
      />
      <View style={styles.containerTitle}>
        <Text style={styles.title}>{card.title}</Text>
      </View>
      <Text style={styles.date}>{getDateBy(formatDate)}</Text>
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
    backgroundColor: '#2CF4C4',
    flexDirection: 'row',
    marginTop: 20,
  },
  title: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 23,
    alignSelf: 'center',
    marginTop: 10,
  },
  date: {
    color: 'black',
    opacity: 0.6,
    alignSelf: 'flex-end',
  },
  check: {
    height: 60,
    width: 60,
  },
});
