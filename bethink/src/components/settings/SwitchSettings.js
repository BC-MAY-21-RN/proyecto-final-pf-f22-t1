import React from 'react';
import {Switch} from 'react-native';
export const SwitchSettings = ({enable, setSwithSecurity, secure, swithSecurity}) => {
  const {pin, biometric} = swithSecurity;
  const enablePin = () => {
    setSwithSecurity(previousState => {
      console.log(previousState);
    });
  };
  const enableBiometric = () => {
    setSwithSecurity({
      biometric: true,
    });
  };
  return (
    <Switch
      trackColor={{false: '#767577', true: '#767577'}}
      thumbColor={enable ? '#74F572' : '#f4f3f4'}
      onValueChange={secure === 'pin' ? enablePin : enableBiometric}
      value={enable}
    />
  );
};
gi