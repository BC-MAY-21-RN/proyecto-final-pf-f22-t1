import React from 'react';
import {StyleSheet, TouchableOpacity, Text} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {getDateBy, getTimeBy} from '../../helpers/getDate';

export const BtnAddReminder = ({title, date, setErrors}) => {
  const onSend = () => {
    if (title.length <= 0) {
      setErrors(true);
    } else {
      const dataReminder = {
        title,
        date,
      };
      console.log(dataReminder);
    }
  };

  return (
    <TouchableOpacity onPress={onSend}>
      <LinearGradient colors={['#CC2B5E', '#6A82FB']} style={styles.btn}>
        <Text style={styles.txtBtn}>Save</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btn: {
    height: 40,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 30,
  },
  txtBtn: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
});
