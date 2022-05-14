import React, {useState} from 'react';
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
  const {mode} = useSelector(state => state.ui);
  const [swithSecurity, setSwithSecurity] = useState(initialState);

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
      <ModalPin swithSecurity={swithSecurity} setSwithSecurity={setSwithSecurity} />
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
