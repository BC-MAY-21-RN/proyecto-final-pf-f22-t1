import React, {useState} from 'react';
import {View, Text, Switch, StyleSheet} from 'react-native';

export const SecurityNote = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <View style={styles.containerDateSecurity}>
      <Text style={styles.txtDate}>24 June, 2022</Text>
      <View style={styles.containerSecurity}>
        <Text style={styles.txtSecurity}>Security</Text>
        <Switch
          trackColor={{false: '#767577', true: '#767577'}}
          thumbColor={isEnabled ? '#74F572' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  containerDateSecurity: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 5,
    alignItems: 'center',
  },
  containerSecurity: {
    flexDirection: 'row',
  },
  txtDate: {
    color: 'grey',
  },
  txtSecurity: {
    color: 'white',
    marginRight: 5,
  },
});
