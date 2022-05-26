import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
export const NoReminders = () => {
  return (
    <View>
      <Image
        source={require('../../imgs/home/notimes.png')}
        style={styles.img}
      />
      <Text style={styles.msg}>There are no reminders for today.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  img: {
    height: 120,
    width: 120,
    alignSelf: 'center',
    marginVertical: 15,
  },
  msg: {
    alignSelf: 'center',
    fontWeight: 'bold',
    color: 'gray',
  },
});
