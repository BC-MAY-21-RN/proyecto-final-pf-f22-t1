import React, {useEffect, useState} from 'react';
import {Text, StyleSheet} from 'react-native';
import FingerprintScanner from 'react-native-fingerprint-scanner';
import {ItemSecurity} from './ItemSecurity';

export const SecureSettings = ({swithSecurity, setSwithSecurity}) => {
  const {pin, biometric} = swithSecurity;
  const [permission, setPermission] = useState(false);

  const isSensorAvailable = () => {
    FingerprintScanner.isSensorAvailable()
      .then(biometryType => {
        setPermission(true);
      })
      .catch(error => setPermission(false));
  };

  useEffect(() => {
    isSensorAvailable();
  }, []);

  return (
    <>
      <ItemSecurity
        icon="grid-outline"
        txt="Pin"
        enable={pin}
        setSwithSecurity={setSwithSecurity}
      />
      <ItemSecurity
        icon="finger-print-outline"
        txt="Biometric"
        enable={biometric}
        setSwithSecurity={setSwithSecurity}
        permission={permission}
      />
      {!permission && (
        <Text style={styles.msgPermission}>
          This option is not enabled on your device
        </Text>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  msgPermission: {
    color: '#FC5C7D',
    textAlign: 'right',
  },
});
