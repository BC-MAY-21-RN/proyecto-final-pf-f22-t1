import React from 'react';
import {Text, StyleSheet} from 'react-native';
import {ActionPin} from './ActionPin';
import {ModalMain} from './ModalMain';
import {NumbersPin} from './NumbersPin';

export const ModalPinContainer = ({pin, setShowModalPin, setPin, setShowErrors, onChangePin, navigation, showErrors}) => {
  return (
    <>
      <ModalMain
        pin={pin}
        setShowModalPin={setShowModalPin}
        setPin={setPin}
        setShowErrors={setShowErrors}
      />
      {showErrors && <Text style={styles.errors}>PIN incorrect</Text>}
      <NumbersPin onChangePin={onChangePin} />
      <ActionPin
        pin={pin}
        setPin={setPin}
        onChangePin={onChangePin}
        setShowErrors={setShowErrors}
        setShowModalPin={setShowModalPin}
        navigation={navigation}
      />
    </>
  );
};

const styles = StyleSheet.create({
  errors: {
    color: '#FC5C7D',
    alignSelf: 'center',
    marginBottom: 10,
    fontWeight: 'bold',
  },
  containerNumbers: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 10,
  },
});
