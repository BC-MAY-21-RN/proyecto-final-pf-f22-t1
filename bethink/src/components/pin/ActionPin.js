import React from 'react';
import {StyleSheet, View} from 'react-native';
import {BtnDelete} from './BtnDelete';
import {BtnEntry} from './BtnEntry';
import {ModalRow} from './ModalRow';

export const ActionPin = ({pin, setPin, setShowErrors, onChangePin, navigation}) => {
  return (
    <View style={styles.containerNumbers}>
      <ModalRow number={0} onChangePin={onChangePin} />
      <BtnDelete pin={pin} setPin={setPin} />
      <BtnEntry
        pin={pin}
        setPin={setPin}
        setShowErrors={setShowErrors}
        navigation={navigation}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  containerNumbers: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 10,
  },
});
