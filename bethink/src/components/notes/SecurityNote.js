import React from 'react';
import {View, Text, Switch, StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';

export const SecurityNote = ({formNote, setFormNote}) => {
  const {mode} = useSelector(state => state.ui);
  const {security, date} = formNote;
  const toggleSwitch = () => {
    setFormNote({...formNote, security: !security});
  };

  return (
    <View style={styles.containerDateSecurity}>
      <Text style={styles.txtDate}>{date}</Text>
      <View style={styles.containerSecurity}>
        <Text
          style={[
            styles.txtSecurity,
            mode === 'light' && styles.txtSecurityLight,
          ]}>
          Security
        </Text>
        <Switch
          trackColor={{false: '#767577', true: '#767577'}}
          thumbColor={security ? '#74F572' : '#f4f3f4'}
          onValueChange={toggleSwitch}
          value={security}
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
    alignItems: 'center',
  },
  txtDate: {
    color: 'grey',
  },
  txtSecurity: {
    color: 'white',
    marginRight: 5,
  },
  txtSecurityLight: {
    color: 'black',
  },
});
