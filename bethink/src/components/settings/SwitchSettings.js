import React from 'react';
import {Switch} from 'react-native';
import { useDispatch } from 'react-redux';
import { removeSecurity } from '../../reducers/uiSlice';

export const SwitchSettings = ({enable, setSwithSecurity, secure, permission}) => {
  const dispatch = useDispatch()
  const enablePin = () => {
    if (enable) {
      setSwithSecurity({pin: false});
      dispatch(removeSecurity())
    } else {
      setSwithSecurity({pin: true});
    }
  };
  const enableBiometric = () => {
    if(!permission) return;
    if (enable) {
      setSwithSecurity({biometric: false});
    } else {
      setSwithSecurity({biometric: true});
    }
  };
  return (
    <Switch
      trackColor={{false: '#767577', true: '#767577'}}
      thumbColor={enable ? '#74F572' : '#f4f3f4'}
      onValueChange={secure.includes('Pin') ? enablePin : enableBiometric}
      value={enable}
    />
  );
};
