import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import {DateTimePickerAndroid} from '@react-native-community/datetimepicker';
import {getDateBy, getTimeBy} from '../../helpers/getDate';
import {useSelector} from 'react-redux';

export const DateReminder = ({date, setDate}) => {
  const {mode} = useSelector(state => state.ui);
  const showMode = currentMode => {
    DateTimePickerAndroid.open({
      value: date,
      onChange,
      mode: currentMode,
      is24Hour: true,
    });
  };

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setDate(currentDate);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  const showTimepicker = () => {
    showMode('time');
  };
  return (
    <View>
      <Text style={[styles.label, mode === 'light' && styles.labelLight]}>
        Select the date
      </Text>
      <View style={styles.containerDate}>
        <Text style={styles.infoDate}>{getDateBy(date)}</Text>
        <TouchableOpacity style={styles.btnDate} onPress={showDatepicker}>
          <Text style={styles.btnTxt}>Date</Text>
        </TouchableOpacity>
      </View>
      <Text style={[styles.label, mode === 'light' && styles.labelLight]}>Select the time</Text>
      <View style={styles.containerDate}>
        <Text style={styles.infoTime}>{getTimeBy(date)}</Text>
        <TouchableOpacity
          style={[styles.btnDate, styles.btnTime]}
          onPress={showTimepicker}>
          <Text style={styles.btnTxt}>Time</Text>
        </TouchableOpacity>
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
  containerDate: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 20,
    alignItems: 'center',
  },
  btnDate: {
    backgroundColor: '#FC5C7D',
    width: 100,
    height: 30,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnTxt: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  btnTime: {
    backgroundColor: '#6A82FB',
  },
  infoDate: {
    color: '#6A82FB',
    fontWeight: 'bold',
  },
  infoTime: {
    color: '#FC5C7D',
    fontWeight: 'bold',
  },
});
