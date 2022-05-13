import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
export const IconsDrawer = ({route, focused, size}) => {
  let iconName;
  if (route.name === 'Home') {
    iconName = focused ? 'home' : 'home-outline';
  } else if (route.name === 'LoveNotes') {
    iconName = focused ? 'heart' : 'heart-outline';
  } else if (route.name === 'Settings') {
    iconName = focused ? 'settings' : 'settings-outline';
  }
  return (
    <Ionicons
      name={iconName}
      size={size}
      color={focused ? 'white' : '#FC5C7D'}
    />
  );
};
