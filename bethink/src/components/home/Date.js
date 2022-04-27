import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
export const Date = () => {
  return (
    <LinearGradient colors={['#FC5C7D', '#6A82FB']} style={styles.container}>
      <Text style={styles.txtday}>25</Text>
      <Text style={styles.txtdate}>April, 2022</Text>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 160,
    width: 190,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  txtday: {
    fontSize: 65,
    color: 'white',
    fontWeight: 'bold',
  },
  txtdate: {
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
