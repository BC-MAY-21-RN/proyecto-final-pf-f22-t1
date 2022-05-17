import React from 'react';
import {useSelector} from 'react-redux';
import {View, StyleSheet} from 'react-native';
import {ModalClose} from './ModalClose';
import {ModalInput} from './ModalInput';
import {ModalBtn} from './ModalBtn';

export const ContainerPin = ({
  setShowModal,
  setSwithSecurity,
  password,
  setPassword,
}) => {
  const {mode} = useSelector(state => state.ui);
  return (
    <View style={styles.container}>
      <View
        style={[
          styles.containerModal,
          mode === 'light' && styles.containerModalLight,
        ]}>
        <ModalClose
          setShowModal={setShowModal}
          setSwithSecurity={setSwithSecurity}
        />
        <ModalInput password={password} setPassword={setPassword} />
        <ModalBtn password={password} setShowModal={setShowModal} />
      </View>
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
