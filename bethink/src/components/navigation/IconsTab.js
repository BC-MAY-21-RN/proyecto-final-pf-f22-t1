import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
export const IconsTab = ({route, focused, size}) => {
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
      color={focused ? 'white' : '#FC5C7D'}
    />
  );
};
