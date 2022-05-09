import React from 'react';
import {View, TextInput, StyleSheet, ScrollView} from 'react-native';
import {useSelector} from 'react-redux';
export const AddNote = ({formNote, setFormNote}) => {
  const {note} = formNote;
  const {mode} = useSelector(state => state.ui);
  return (
    <ScrollView horizontal={false}>
      <View
        style={[styles.container, mode === 'light' && styles.containerLight]}>
        <TextInput
          placeholder="My note..."
          multiline
          placeholderTextColor={'grey'}
          value={note}
          onChangeText={value => setFormNote({...formNote, note: value})}
          style={[styles.textInput, mode === 'light' && styles.txtInputLight]}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(255,255,255,0.12)',
    borderRadius: 10,
    height: 300,
    padding: 5,
    marginTop: 10,
  },
  containerLight: {
    backgroundColor: 'rgba(154,154,154,0.12)',
    // opacity: 0.12,
  },
  txtInputLight: {
    color: 'black',
  },
  textInput:{
    color:'white',
  },
});
