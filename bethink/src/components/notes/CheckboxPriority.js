import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {useSelector} from 'react-redux';
export const CheckboxPriority = ({txt, priority, setFormNote, formNote}) => {
  const {mode} = useSelector(state => state.ui);
  const onChange = () => {
    setFormNote({...formNote, priority: txt.toLowerCase()});
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onChange}>
        <View
          style={[
            styles.itemCheckbox,
            mode === 'light' && styles.itemCheckboxLight,
            priority === txt.toLowerCase() && styles.itemActive,
          ]}
        />
      </TouchableOpacity>
      <Text
        style={[
          styles.txtPriority,
          mode === 'light' && styles.txtPriorityLight,
          priority === txt.toLowerCase() && styles.txtActive,
        ]}>
        {txt}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  itemCheckbox: {
    height: 15,
    width: 15,
    backgroundColor: 'white',
  },
  itemCheckboxLight: {
    backgroundColor: 'black',
  },
  itemActive: {
    backgroundColor: '#6A82FB',
  },
  txtPriority: {
    color: 'white',
    marginLeft: 5,
  },
  txtActive: {
    textDecorationLine: 'line-through',
    color: '#FC5C7D',
  },
  txtPriorityLight: {
    color: 'black',
  },
});
