import React from 'react';
import {View, StyleSheet, TouchableOpacity, Text} from 'react-native';
import {SectionName} from '../home/SectionName';
import {CheckboxPriority} from './CheckboxPriority';
import LinearGradient from 'react-native-linear-gradient';

const itemsPriority = ['Low', 'Median', 'High'];

export const PriorityNote = ({priority, setPriority}) => {
  return (
    <View style={styles.container}>
      <SectionName text="Priority" />
      <View style={styles.containerCheckbox}>
        {itemsPriority.map(item => (
          <CheckboxPriority
            key={item}
            txt={item}
            priority={priority}
            setPriority={setPriority}
          />
        ))}
      </View>
      <TouchableOpacity>
        <LinearGradient colors={['#CC2B5E', '#6A82FB']} style={styles.btn}>
          <Text style={styles.txtBtn}>Save</Text>
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 5,
  },
  containerCheckbox: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 5,
  },
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
  },
});
