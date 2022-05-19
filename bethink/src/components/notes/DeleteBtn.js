import React from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';
import firestore from '@react-native-firebase/firestore';

export const DeleteBtn = ({setShowModalDelete, formNote, navigation}) => {
  const onDeleteNote = async () => {
    try {
      firestore()
        .collection('Notes')
        .doc(formNote.id)
        .delete()
        .then(() => {
          navigation.navigate('HomeAPP');
        });
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
      <TouchableOpacity style={styles.btnDelete} onPress={onDeleteNote}>
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
