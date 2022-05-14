import React from 'react';
import {TouchableOpacity, Text, View, StyleSheet} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import { setSecurity } from '../../reducers/uiSlice';
export const ModalBtn = ({password, setShowModal}) => {
  const {mode} = useSelector(state => state.ui);
  const dispatch = useDispatch();
  const securityPin = () => {
    dispatch(setSecurity('pin'))
    setShowModal(false)
  };
  return (
    <TouchableOpacity
      onPress={securityPin}
      disabled={password.length < 4 ? true : false}>
      <View style={[styles.btn, mode === 'light' && styles.btnLight]}>
        <Text style={styles.btnTxt}>Save</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btn: {
    backgroundColor: '#231E41',
    height: 40,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
  },
  btnTxt: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
  },
  btnLight: {
    borderWidth: 1,
    borderColor: 'white',
  },
});
