import React, {useEffect, useState} from 'react';
import {Modal, View, StyleSheet} from 'react-native';
import {ContainerPin} from './ContainerPin';

export const ModalPin = ({swithSecurity, setSwithSecurity}) => {
  const {pin} = swithSecurity;
  const [password, setPassword] = useState('');
  const [showModal, setShowModal] = useState(pin);

  useEffect(() => {
    if (!pin) return;
    setPassword('');
    setShowModal(pin);
  }, [pin]);

  return (
    <View>
      <Modal animationType="slide" transparent={true} visible={showModal}>
        <ContainerPin
          setShowModal={setShowModal}
          setSwithSecurity={setSwithSecurity}
          password={password}
          setPassword={setPassword}
        />
      </Modal>
    </View>
  );
};
