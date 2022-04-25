import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export const DisplayUser = () => {
  return (
    <View>
      <Text style={styles.txtuser}>Hello, Juan</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  txtuser: {
    color: 'white',
    fontWeight: 'bold',
    textAlign:'left',
  },
});
