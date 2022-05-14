import React, {useCallback} from 'react';
import {useFocusEffect} from '@react-navigation/native';
import {View, StyleSheet, ScrollView} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {getAllNotes} from '../../actions/notes';
import {ContainerMain} from '../../components/home/ContainerMain';
import {Reminders} from '../../components/home/Reminders';
import {ConditionNotes} from '../../components/home/ConditionNotes';
import {SectionMain} from '../../components/home/SectionMain';
import {getStorageSecurity} from '../../helpers/storageSecurity';
import {removeSecurity, setSecurity} from '../../reducers/uiSlice';

export const HomeScreen = () => {
  const {uid} = useSelector(state => state.auth);
  const {security} = useSelector(state => state.ui);
  const dispatch = useDispatch();

  const getSecurity = async () => {
    const {mode, password = ''} = await getStorageSecurity();
    if (!mode) {
      dispatch(removeSecurity());
    } else {
      dispatch(setSecurity({mode, password}));
    }
  };

  useFocusEffect(
    useCallback(() => {
      dispatch(getAllNotes(uid));
      getSecurity();
    }, []),
  );

  console.log(security);
  return (
    <ContainerMain>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <SectionMain />
          <Reminders />
          <ConditionNotes />
        </View>
      </ScrollView>
    </ContainerMain>
  );
};

const styles = StyleSheet.create({
  containerCenter: {
    alignItems: 'center',
  },
  container: {
    marginHorizontal: 20,
  },
});
