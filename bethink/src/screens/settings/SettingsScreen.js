import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';
import {ContainerMain} from '../../components/home/ContainerMain';
import {SectionName} from '../../components/home/SectionName';
import {SecureSettings} from '../../components/settings/SecureSettings';
import {ModalPin} from '../../components/settings/ModalPin';

const initialState = {
  pin: false,
  biometric: false,
};

export const SettingsScreen = () => {
  const {mode, security} = useSelector(state => state.ui);
  const [swithSecurity, setSwithSecurity] = useState(initialState);

  useEffect(() => {
    if (security.mode === 'pin') {
      setSwithSecurity({...swithSecurity, pin: true});
    } else if (security.mode === 'biometric') {
      setSwithSecurity({...swithSecurity, biometric: true});
    }
  }, []);

  return (
    <ContainerMain>
      <View style={styles.container}>
        <Text style={[styles.title, mode === 'light' && styles.titleLight]}>
          Settings
        </Text>
        <SectionName text="Security" />
        <SecureSettings
          swithSecurity={swithSecurity}
          setSwithSecurity={setSwithSecurity}
        />
      </View>
      {security.mode.length === 0 && (
        <ModalPin
          swithSecurity={swithSecurity}
          setSwithSecurity={setSwithSecurity}
        />
      )}
    </ContainerMain>
  );
};
const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    marginTop: 20,
  },
  title: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  titleLight: {
    color: 'black',
  },
});
