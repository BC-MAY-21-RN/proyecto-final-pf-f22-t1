import React from 'react';
import {Modal, View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {useSelector} from 'react-redux';
export const ModalCompleteForm = ({formNote, setFormNote}) => {
  const {mode} = useSelector(state => state.ui);
  const {errors} = formNote;
  const closeModal = () => {
    setFormNote({...formNote, errors: false});
  };
  return (
    <View>
      <Modal transparent={true} visible={errors}>
        <View style={styles.container}>
          <View
            style={[
              styles.containerModal,
              mode === 'light' && styles.containerModalLight,
            ]}>
            <Icon name="close-circle" size={60} color="red" />
            <Text
              style={[
                styles.txtAlert,
                mode === 'light' && styles.txtAlertLight,
              ]}>
              Complete the fields!
            </Text>
            <TouchableOpacity style={styles.btnModal} onPress={closeModal}>
              <Text style={styles.txtBtn}>OK</Text>
            </TouchableOpacity>
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
    height: 200,
    width: '100%',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  txtAlert: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 20,
  },
  btnModal: {
    backgroundColor: '#6A82FB',
    width: 100,
    borderRadius: 5,
    marginTop: 20,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  txtBtn: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },
  containerModalLight: {
    backgroundColor: '#231E41',
  },
  txtAlertLight: {
    color: 'white',
  },
});
