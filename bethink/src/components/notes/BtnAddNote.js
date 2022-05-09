import React from 'react';
import {StyleSheet, TouchableOpacity, Text} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import firestore from '@react-native-firebase/firestore';
import {useSelector} from 'react-redux';

export const BtnAddNote = ({formNote, setFormNote, navigation}) => {
  const {title, note} = formNote;
  const {uid} = useSelector(state => state.auth);
  const addNoteFirebase = async () => {
    try {
      await firestore()
        .collection('Notes')
        .add({...formNote, user: uid});
    } catch (error) {
      console.log(error);
    }
  };

  const addNote = () => {
    if (title.length === 0 || note.length === 0) {
      setFormNote({...formNote, errors: true});
    } else {
      addNoteFirebase();
      navigation.navigate('HomeAPP');
    }
  };
  return (
    <TouchableOpacity onPress={addNote}>
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
    marginTop: 30
  },
  txtBtn: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
});
