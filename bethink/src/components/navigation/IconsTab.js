import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useSelector} from 'react-redux';
export const IconsTab = ({route, focused, size}) => {
  const {mode} = useSelector(store => store.ui);
  let iconName;
  if (route.name === 'HomeAPP') {
    iconName = focused ? 'home' : 'home-outline';
  } else if (route.name === 'Notes') {
    iconName = focused ? 'copy' : 'copy-outline';
  } else if (route.name === 'Reminders') {
    iconName = focused ? 'time' : 'time-outline';
  }
  return (
    <Ionicons
      name={iconName}
      size={size}
      // color={focused ? 'white' : '#FC5C7D'}
      color={focused ? (mode === 'dark' ? 'white' : '#231E41') : '#FC5C7D'}
    />
  );
};
