import React from 'react';
import {StyleSheet, TouchableOpacity, Text} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import LinearGradient from 'react-native-linear-gradient';
import firestore from '@react-native-firebase/firestore';
import {closeModalEdit} from '../../reducers/remindersSlice';

export const BtnAEditReminder = ({
  title,
  date,
  setErrors,
  navigation,
  setTitle,
  id,
  statusReminder
}) => {
  const {uid} = useSelector(state => state.auth);
  const dispatch = useDispatch();
  const onEditFirebase = async () => {
    try {
      await firestore()
        .collection('Reminders')
        .doc(id)
        .update({title, date, user: uid, status: statusReminder});
    } catch (error) {
      console.log(error);
    }
  };

  const onSend = () => {
    if (title.length <= 0) {
      setErrors(true);
    } else {
      onEditFirebase();
      navigation.navigate('HomeAPP');
      setTitle('');
      dispatch(closeModalEdit());
    }
  };

  return (
    <TouchableOpacity onPress={onSend}>
      <LinearGradient colors={['#CC2B5E', '#6A82FB']} style={styles.btn}>
        <Text style={styles.txtBtn}>Edit</Text>
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
