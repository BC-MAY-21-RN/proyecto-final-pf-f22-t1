import React from 'react';
import {View, StyleSheet} from 'react-native';
import {ModalRow} from './ModalRow';
const data = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

export const NumbersPin = ({onChangePin}) => {
  return (
    <>
      {data.map(row => (
        <View style={styles.containerNumbers} key={row}>
          {row.map(num => (
            <ModalRow number={num} onChangePin={onChangePin} key={num} />
          ))}
        </View>
      ))}
    </>
  );
};

const styles = StyleSheet.create({
  containerNumbers: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 10,
  },
});
