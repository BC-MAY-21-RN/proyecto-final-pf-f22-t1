import React, {useState} from 'react';
import {View, Modal, Text, StyleSheet} from 'react-native';
import {ModalMain} from '../pin/ModalMain';
import {ActionPin} from '../pin/ActionPin';
import {NumbersPin} from '../pin/NumbersPin';

export const ModalPinNote = ({showModalPin, navigation, setShowModalPin}) => {
  const [pin, setPin] = useState('');
  const [showErrors, setShowErrors] = useState(false);

  const onChangePin = value => {
    setShowErrors(false);
    if (pin.length >= 4) return;
    setPin(previous => previous + value);
  };

  return (
    <Modal animationType="slide" transparent={true} visible={showModalPin}>
      <View style={styles.container}>
        <View style={[styles.containerModal]}>
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
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  containerModal: {
    backgroundColor: 'white',
    width: '100%',
    padding: 20,
    height: '100%',
    justifyContent: 'center',
  },
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
