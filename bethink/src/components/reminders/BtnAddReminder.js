import React from 'react';
import {StyleSheet, TouchableOpacity, Text} from 'react-native';
import {useSelector} from 'react-redux';
import LinearGradient from 'react-native-linear-gradient';
import firestore from '@react-native-firebase/firestore';

export const BtnAddReminder = ({
  title,
  date,
  setErrors,
  navigation,
  setTitle,
}) => {
  const {uid} = useSelector(state => state.auth);
  const onSaveFirebase = async () => {
    try {
      await firestore()
        .collection('Reminders')
        .add({title, date, user: uid, status: false});
    } catch (error) {
      console.log(error);
    }
  };

  const onSend = () => {
    if (title.length <= 0) {
      setErrors(true);
    } else {
      onSaveFirebase();
      navigation.navigate('HomeAPP');
      setTitle('');
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
