import React from 'react';
import {View, Image, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {useDispatch} from 'react-redux';
import {setModalPin} from '../../reducers/uiSlice';
export const ModalMain = ({pin, setShowModalPin, setPin, setShowErrors}) => {
  const dispatch = useDispatch();
  const onCloseModal = () => {
    // setShowModalPin(false);
    dispatch(setModalPin(false));
    setPin('');
    setShowErrors(false);
  };
  return (
    <>
      <TouchableOpacity onPress={onCloseModal}>
        <Icon name="close-circle" color="red" size={50} style={styles.close} />
      </TouchableOpacity>
      <View>
        <Image
          source={require('../../imgs/settings/password.png')}
          style={styles.imgSecurity}
        />
      </View>
      <View style={styles.containerPin}>
        <Text style={styles.indication}>Write your pin</Text>
        <Text style={styles.pin}>{pin === '' ? '****' : pin} </Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  imgSecurity: {
    height: 150,
    width: 150,
    alignSelf: 'center',
  },
  pin: {
    color: '#231E41',
    fontWeight: 'bold',
    fontSize: 30,
    alignSelf: 'center',
  },
  containerPin: {
    marginTop: 20,
  },
  indication: {
    alignSelf: 'center',
    color: 'black',
    fontSize: 18,
  },
  close: {
    alignSelf: 'flex-end',
  },
});
