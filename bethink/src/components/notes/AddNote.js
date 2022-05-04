import React from 'react';
import {View, TextInput, StyleSheet, ScrollView} from 'react-native';
export const AddNote = () => {
  return (
    <ScrollView horizontal={false}>
      <View style={styles.container}>
        <TextInput placeholder="My note..." multiline />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(255,255,255,0.12)',
    borderRadius: 10,
    height: 450,
    padding: 5,
  },
});
