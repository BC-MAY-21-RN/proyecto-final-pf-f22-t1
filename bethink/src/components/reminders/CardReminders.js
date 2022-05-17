import React from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export const CardReminders = ({card}) => {
  return (
    <View>
      <View style={styles.containerTitle}>
        <Text style={styles.title}>{card.title}</Text>
      </View>
      <Text>{card.date}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  containerCard: {
    height: 115,
    marginVertical: 10,
    borderRadius: 20,
    padding: 10,
    justifyContent: 'space-around',
  },
  title: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 20,
    marginLeft: 15,
  },
  containerTitle: {
    flexDirection: 'row',
    alignItems: 'right',
  },
  date: {
    alignSelf: 'flex-end',
    color: 'black',
    opacity: 0.6,
  },
});
