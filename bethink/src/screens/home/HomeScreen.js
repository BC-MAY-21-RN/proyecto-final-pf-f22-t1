import React, {useCallback} from 'react';
import {useFocusEffect} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {getAllNotes} from '../../actions/notes';
import {ContainerMain} from '../../components/home/ContainerMain';
import {getStorageSecurity} from '../../helpers/storageSecurity';
import {removeSecurity, setSecurity} from '../../reducers/uiSlice';
import {ContainerHome} from '../../components/home/ContainerHome';

export const HomeScreen = () => {
  const {uid} = useSelector(state => state.auth);
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
  return (
    <ContainerMain>
      <ContainerHome />
    </ContainerMain>
  );
};
