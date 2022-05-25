import React from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import {useDispatch} from 'react-redux';
import {closeModalEdit} from '../../reducers/remindersSlice';

export const DeleteReminder = ({setShowModalDelete, navigation, id}) => {
  const disptach = useDispatch();
  const onDeleteReminder = async () => {
    try {
      await firestore().collection('Reminders').doc(id).delete();
      navigation.navigate('HomeAPP');
      setShowModalDelete(false);
      disptach(closeModalEdit());
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <View style={styles.containerBtn}>
      <TouchableOpacity
        style={[styles.btnDelete, styles.btnCancel]}
        onPress={() => setShowModalDelete(false)}>
        <Text style={styles.txtBtn}>Cancel</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btnDelete} onPress={onDeleteReminder}>
        <Text style={styles.txtBtn}>Delete</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  containerBtn: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginTop: 50,
  },
  btnDelete: {
    backgroundColor: '#FC5C7D',
    borderRadius: 10,
    width: 120,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnCancel: {
    backgroundColor: 'gray',
  },
  txtBtn: {
    color: 'white',
    fontWeight: 'bold',
  },
});
