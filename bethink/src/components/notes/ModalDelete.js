import React from 'react';
import {Modal, View, StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';
import {DeleteBtn} from './DeleteBtn';
import {DeleteMain} from './DeleteMain';

export const ModalDelete = ({setShowModalDelete, showModalDelete, formNote, navigation}) => {
  const {mode} = useSelector(state => state.ui);
  return (
    <Modal transparent={true} visible={showModalDelete}>
      <View style={styles.container}>
        <View
          style={[
            styles.containerModal,
            mode === 'light' && styles.containerModalLight,
          ]}>
          <DeleteMain />
          <DeleteBtn setShowModalDelete={setShowModalDelete} formNote={formNote} navigation={navigation} />
        </View>
      </View>
    </Modal>
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
    height: 300,
    width: '100%',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  containerModalLight: {
    backgroundColor: '#231E41',
  },
});
