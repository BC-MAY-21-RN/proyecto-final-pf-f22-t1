import React from 'react';
import {View, StyleSheet, Text, Switch} from 'react-native';
import {useSelector} from 'react-redux';
export const StatusReminder = ({setStatusReminder, statusReminder}) => {
  const {mode} = useSelector(state => state.ui);
  return (
    <View>
      <Text style={[styles.label, mode === 'light' && styles.labelLight]}>
        Select the status
      </Text>
      <View style={styles.containerSwitch}>
        <Text style={styles.txtStatus}>Complete</Text>
        <Switch
          trackColor={{false: '#767577', true: '#767577'}}
          thumbColor={statusReminder ? '#74F572' : '#f4f3f4'}
          onValueChange={setStatusReminder}
          value={statusReminder}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  label: {
    fontSize: 22,
    color: 'white',
    fontWeight: 'bold',
  },
  labelLight: {
    color: 'black',
  },
  containerSwitch: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
  },
  txtStatus: {
    color: 'gray'
  }
});
