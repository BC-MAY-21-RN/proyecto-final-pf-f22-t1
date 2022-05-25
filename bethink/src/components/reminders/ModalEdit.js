import React, {useEffect, useState} from 'react';
import {Modal, View, StyleSheet, Text} from 'react-native';
import {ContainerMain} from '../home/ContainerMain';
import Icon from 'react-native-vector-icons/Ionicons';
import {useDispatch, useSelector} from 'react-redux';
import {TitleReminder} from './TitleReminder';
import {DateReminder} from './DateReminder';
import {closeModalEdit} from '../../reducers/remindersSlice';
import {BtnAEditReminder} from './BtnEditReminder';
import {ModalCompleteReminders} from './ModalCompleteReminders';
import {StatusReminder} from './StatusReminder';
import {BtnDeleteReminder} from './BtnDeleteReminder';
import {ModalDeleteReminder} from './ModalDeleteReminder';

export const ModalEdit = ({navigation}) => {
  const {modalEdit, reminderEdit} = useSelector(state => state.reminders);
  const {mode} = useSelector(state => state.ui);
  const disptach = useDispatch();
  const {title, date, id, status} = reminderEdit;

  const [titleReminder, setTitleReminder] = useState('');
  const [dateReminder, setDateReminder] = useState(new Date());
  const [errors, setErrors] = useState(false);
  const [statusReminder, setStatusReminder] = useState(false);
  const [showModalDelete, setShowModalDelete] = useState(false);

  useEffect(() => {
    setTitleReminder(title);
    setDateReminder(new Date(date));
    setStatusReminder(status);
  }, [reminderEdit]);

  return (
    <Modal transparent={false} visible={modalEdit}>
      <ContainerMain>
        <View style={styles.container}>
          <View style={styles.containerSection}>
            <Icon
              name="arrow-back-outline"
              color="#FC5C7D"
              size={45}
              onPress={() => disptach(closeModalEdit())}
            />
            <Text style={[styles.title, mode === 'light' && styles.titleLight]}>
              Edit Reminder
            </Text>
          </View>
          <TitleReminder title={titleReminder} setTitle={setTitleReminder} />
          <DateReminder date={dateReminder} setDate={setDateReminder} />
          <StatusReminder
            statusReminder={statusReminder}
            setStatusReminder={setStatusReminder}
          />
          <BtnDeleteReminder setShowModalDelete={setShowModalDelete} />
          <BtnAEditReminder
            title={titleReminder}
            date={dateReminder}
            setErrors={setErrors}
            setTitle={setTitleReminder}
            id={id}
            navigation={navigation}
            statusReminder={statusReminder}
          />
          <ModalCompleteReminders errors={errors} setErrors={setErrors} />
          <ModalDeleteReminder
            showModalDelete={showModalDelete}
            setShowModalDelete={setShowModalDelete}
            navigation={navigation}
            id={id}
          />
        </View>
      </ContainerMain>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
  },
  containerSection: {
    flexDirection: 'row',
    marginTop: 20,
  },
  title: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
    marginLeft: 50,
  },
  titleLight: {
    color: 'black',
  },
});
