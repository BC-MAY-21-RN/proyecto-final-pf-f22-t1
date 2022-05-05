import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {useSelector} from 'react-redux';
export const AddNoteName = ({navigation}) => {
  const {mode} = useSelector(state => state.ui);
  return (
    <View style={styles.containerSection}>
      <Icon
        name="arrow-back-outline"
        color="#FC5C7D"
        size={45}
        onPress={() => navigation.goBack()}
      />
      <Text style={[styles.title, mode === 'light' && styles.titleLight]}>
        New note
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  containerSection: {
    flexDirection: 'row',
    marginTop: 20,
  },
  title: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
    marginLeft: 50,
  },
  titleLight: {
    color: 'black',
  },
});
