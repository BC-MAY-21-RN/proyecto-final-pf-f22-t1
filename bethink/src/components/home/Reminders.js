import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const data = [
  {
    id: '1',
    time: '9:00 a.m',
    activity: 'Sciences exam',
  },
  {
    id: '2',
    time: '1:30 p.m',
    activity: 'Go to the store',
  },
  {
    id: '3',
    time: '7:30 a.m',
    activity: 'Dinner with Dania',
  },
];
export const Reminders = () => {
  const cardReminders = ({item}) => (
    <LinearGradient
      colors={['#CC2B5E', '#0ABFBC']}
      style={styles.containerCard}>
      <Text style={styles.txtTime}>{item.time}</Text>
      <Text style={styles.txtAct}>{item.activity}</Text>
    </LinearGradient>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.txt}>Reminders for today</Text>
      <FlatList
        data={data}
        keyExtractor={item => item.id}
        renderItem={cardReminders}
        horizontal
        nestedScrollEnabled
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  txt: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
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
