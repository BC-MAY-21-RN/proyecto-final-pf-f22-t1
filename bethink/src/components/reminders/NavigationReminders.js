import React from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';

export const NavigationReminders = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>To Do</Text>
      <Text style={styles.title}>Done</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 55,
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderWidth: 3,
    borderColor: '#6A82FB',
    marginTop: 20,
  },
  title: {
    color: 'white',
    fontSize: 24,
    marginTop: 10,
  },
});
