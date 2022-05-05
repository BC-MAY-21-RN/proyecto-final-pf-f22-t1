import React from 'react';
import {StyleSheet, TouchableOpacity, Text} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
export const BtnAddNote = ({formNote}) => {
  const {title, note} = formNote;
  const addNote = () => {
    if (title.length === 0 || note.length === 0) {
      console.log('completa campos');
    } else {
      /* connect with firebase */
      console.log(formNote);
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
    justifyContent: 'center',
    marginTop: 10,
  },
  txtBtn: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
});
