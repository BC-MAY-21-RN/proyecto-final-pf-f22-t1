import React from 'react';
import {Image, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {useDispatch, useSelector} from 'react-redux';
export const ModalClose = ({setShowModal,setSwithSecurity}) => {
  const {security} = useSelector(state => state.ui);
  const closeModal = () => {
    setShowModal(false);
    if (security.secure.password !== '') {
      setSwithSecurity({pin: false})
    }
  };
  return (
    <>
      <Icon
        name="close-circle-outline"
        color="red"
        size={40}
        style={styles.icon}
        onPress={closeModal}
      />
      <Image
        source={require('../../imgs/settings/password.png')}
        style={styles.img}
      />
    </>
  );
};

const styles = StyleSheet.create({
  icon: {
    alignSelf: 'flex-end',
  },
  img: {
    width: 100,
    height: 100,
    alignSelf: 'center',
    marginVertical: 10,
  },
});
