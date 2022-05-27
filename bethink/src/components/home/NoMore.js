import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
export const NoMore = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../imgs/home/nomore.png')}
        style={styles.img}
      />
      <Text style={styles.msg}>No more reminders</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  img: {
    height: 70,
    width: 70,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 30,
  },
  msg: {
    color: 'gray',
    fontWeight: 'bold',
    fontSize: 13,
  },
});
