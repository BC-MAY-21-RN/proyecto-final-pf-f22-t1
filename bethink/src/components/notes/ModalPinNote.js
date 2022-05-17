import React, {useState} from 'react';
import {View, Modal,StyleSheet} from 'react-native';

import {ModalPinContainer} from '../pin/ModalPinContainer';

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
      <View>
        <View style={[styles.containerModal]}>
          <ModalPinContainer pin={pin} setShowModalPin={setShowModalPin} setPin={setPin} setShowErrors={setShowErrors}
            onChangePin={onChangePin}
            navigation={navigation}
            showErrors={showErrors}
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
});
