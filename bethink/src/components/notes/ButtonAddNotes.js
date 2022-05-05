import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons';
export const ButtonAddNotes = ({navigation}) => {
  return (
    <LinearGradient colors={['#FC5C7D', '#6A82FB']} style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('NewNote')}>
        <Icon name="add-outline" size={50} color="white" />
      </TouchableOpacity>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 100,
    height: 70,
    width: 70,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: 650,
    left: 300,
  },
});
