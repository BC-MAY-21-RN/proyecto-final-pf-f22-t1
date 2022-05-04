import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
export const CheckboxPriority = ({txt, priority, setPriority}) => {
  const onChange = () => {
    setPriority(txt.toLowerCase());
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onChange}>
        <View
          style={[
            styles.itemCheckbox,
            priority === txt.toLowerCase() && styles.itemActive,
          ]}
        />
      </TouchableOpacity>
      <Text
        style={[
          styles.txtPriority,
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
});
