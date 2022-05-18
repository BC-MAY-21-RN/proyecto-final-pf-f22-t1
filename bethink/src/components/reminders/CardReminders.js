import React from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export const CardReminders = ({card}) => {
  const timeReminder = card.time.split(' ');
  return (
    <View style={styles.containerCard}>
      <Image
        source={require('../../imgs/reminder/Red-Alarm.png')}
        style={styles.alarm}
      />
      <View style={styles.containerTitle}>
        <Text style={styles.title}>{card.title}</Text>
        <Text>{card.date}</Text>
      </View>
      <View>
        <Text style={styles.time}>{timeReminder[0]}</Text>
        <Text style={styles.meridian}>{timeReminder[1]}</Text>
      </View>
    </View>
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
    borderWidth: 2,
    borderColor: '#FC5C7D',
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
});
