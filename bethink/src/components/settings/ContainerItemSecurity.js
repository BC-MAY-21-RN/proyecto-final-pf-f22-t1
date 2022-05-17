import React from 'react';
import { ItemSecurity } from './ItemSecurity';

export const ContainerItemSecurity = ({pin, setSwithSecurity, permission, biometric}) => {
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
    </>
  );
};
