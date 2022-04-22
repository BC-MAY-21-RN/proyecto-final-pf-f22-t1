import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export const MsgValidation = ({msg}) => {
  return (
    <View style={styles.containerValidation}>
      <Icon name="close-circle" size={23} color="yellow" />
      <Text style={styles.txtValidation}>{msg}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  containerValidation: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  txtValidation: {
    color: 'white',
    marginLeft: 5,
    fontWeight: 'bold',
    fontSize: 13,
  },
});
