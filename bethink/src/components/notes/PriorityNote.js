import React from 'react';
import {View, StyleSheet} from 'react-native';
import {SectionName} from '../home/SectionName';
import {CheckboxPriority} from './CheckboxPriority';

const itemsPriority = ['Low', 'Median', 'High'];

export const PriorityNote = ({formNote, setFormNote}) => {
  const {priority} = formNote;
  return (
    <View style={styles.container}>
      <SectionName text="Priority" />
      <View style={styles.containerCheckbox}>
        {itemsPriority.map(item => (
          <CheckboxPriority
            key={item}
            txt={item}
            priority={priority}
            formNote={formNote}
            setFormNote={setFormNote}
          />
        ))}
      </View>
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
    color: 'white',
  },
});
