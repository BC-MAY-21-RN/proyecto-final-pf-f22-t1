import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
export const BtnDeleteReminder = ({setShowModalDelete}) => {
  return (
    <TouchableOpacity onPress={() => setShowModalDelete(true)}>
      <View style={styles.container}>
        <Icon name="trash" color="white" size={30} />
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    alignSelf: 'flex-end',
    marginTop: 10,
    backgroundColor: '#FC5C7D',
    borderRadius: 100,
    width: 45,
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 5,
  },
});
