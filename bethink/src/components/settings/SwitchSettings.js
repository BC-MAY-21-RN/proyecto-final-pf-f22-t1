import React from 'react';
import {Switch} from 'react-native';
import {useDispatch} from 'react-redux';
import {storageSecurity} from '../../helpers/storageSecurity';
import {removeSecurity, setSecurity} from '../../reducers/uiSlice';

export const SwitchSettings = ({
  enable,
  setSwithSecurity,
  secure,
  permission,
}) => {
  const dispatch = useDispatch();
  const enablePin = () => {
    if (enable) {
      setSwithSecurity(previouState => ({...previouState, pin: false}));
      dispatch(removeSecurity());
      storageSecurity({mode: '', password: ''});
    } else {
      setSwithSecurity(previouState => {
        if (previouState.biometric) {
          return {...previouState, pin: false};
        }
        return {...previouState, pin: true};
      });
    }
  };
  const enableBiometric = () => {
    if (!permission) return;
    if (enable) {
      setSwithSecurity({biometric: false, pin: false});
      dispatch(removeSecurity());
      storageSecurity({mode: '', password: ''});
    } else {
      setSwithSecurity(previouState => {
        if (previouState.pin) {
          return {...previouState, biometric: false};
        }
        return {...previouState, biometric: true};
      });
      dispatch(setSecurity({mode: 'biometric', password: ''}));
      storageSecurity({mode: 'biometric'});
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
