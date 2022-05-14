import React, {useEffect, useState} from 'react';
import {Modal, View, StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';
import {ModalBtn} from './ModalBtn';
import {ModalClose} from './ModalClose';
import {ModalInput} from './ModalInput';

export const ModalPin = ({swithSecurity, setSwithSecurity}) => {
  const {pin} = swithSecurity;
  const [password, setPassword] = useState('');
  const [showModal, setShowModal] = useState(pin);
  const {mode} = useSelector(state => state.ui);

  useEffect(() => {
    if (!pin) return;
    setPassword('');
    setShowModal(pin);
  }, [pin]);

  return (
    <View>
      <Modal animationType="slide" transparent={true} visible={showModal}>
        <View style={styles.container}>
          <View
            style={[
              styles.containerModal,
              mode === 'light' && styles.containerModalLight,
            ]}>
            <ModalClose setShowModal={setShowModal} setSwithSecurity={setSwithSecurity} />
            <ModalInput password={password} setPassword={setPassword} />
            <ModalBtn password={password} setShowModal={setShowModal}  />
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 40,
  },
  containerModal: {
    backgroundColor: 'white',
    height: 400,
    width: '100%',
    padding: 20,
    borderRadius: 10,
  },
  containerModalLight: {
    backgroundColor: '#231E41',
  },
});
