import React, {useState} from 'react';
import {View, Text, StyleSheet, Switch} from 'react-native';
import {useSelector} from 'react-redux';
import {ContainerMain} from '../../components/home/ContainerMain';
import {SectionName} from '../../components/home/SectionName';
import Icon from 'react-native-vector-icons/Ionicons';
import {SwitchSettings} from '../../components/settings/SwitchSettings';

export const SettingsScreen = () => {
  const {mode} = useSelector(state => state.ui);
  const [swithSecurity, setSwithSecurity] = useState({
    pin: false,
    biometric: false,
  });
  const {pin, biometric} = swithSecurity;
  // const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  return (
    <ContainerMain>
      <View style={styles.container}>
        <Text style={[styles.title, mode === 'light' && styles.titleLight]}>
          Settings
        </Text>
        <SectionName text="Security" />
        <View style={styles.containerSecurity}>
          <View style={styles.containerInfo}>
            <Icon name="grid-outline" size={25} color="white" />
            <Text style={styles.txt}>Pin</Text>
          </View>
          <SwitchSettings
            enable={pin}
            setSwithSecurity={setSwithSecurity}
            swithSecurity
            secure="pin"
          />
        </View>
        <View style={styles.containerSecurity}>
          <View style={styles.containerInfo}>
            <Icon name="finger-print-outline" size={25} color="white" />
            <Text style={styles.txt}>Biometric</Text>
          </View>
          <SwitchSettings
            enable={biometric}
            setSwithSecurity={setSwithSecurity}
            swithSecurity
            secure="biometric"
          />
        </View>
      </View>
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
  containerSecurity: {
    flexDirection: 'row',
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  txt: {
    color: 'white',
    marginLeft: 5,
  },
  containerInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
