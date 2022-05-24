import React from 'react';
import {View, StyleSheet, Text, TextInput} from 'react-native';
import {useSelector} from 'react-redux';
export const TitleReminder = ({title, setTitle}) => {
  const {mode} = useSelector(state => state.ui);
  return (
    <View style={styles.container}>
      <Text style={[styles.label, mode === 'light' && styles.labelLight]}>
        Title
      </Text>
      <TextInput
        value={title}
        onChangeText={setTitle}
        placeholder="Write the title"
        style={[styles.title, mode === 'light' && styles.titleLight]}
        placeholderTextColor="gray"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 15,
    color: 'white',
  },
  titleLight: {
    color: 'black',
  },
  label: {
    fontSize: 22,
    color: 'white',
    fontWeight: 'bold',
  },
  labelLight: {
    color: 'black',
  },
  container: {
    marginVertical: 20,
  },
});
