import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
export const Date = () => {
  return (
    /*<View style = {styles.container}>
      <Text>Fecha</Text>
    </View>*/
    <LinearGradient colors={['#FC5C7D', '#6A82FB']} style={styles.container}>
      <Text style={styles.txtday}>25</Text>
      <Text style={styles.txtdate}>April, 2022</Text>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 130,
    width: 180,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  txtday: {
    fontSize: 65,
    color: 'white',
  },
  txtdate: {
    fontWeight: 'bold',
  },
});
