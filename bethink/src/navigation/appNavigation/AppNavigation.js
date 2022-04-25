import React from 'react';
import {StyleSheet} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {createDrawerNavigator} from '@react-navigation/drawer';
import {TabNavigation} from './TabNavigation';
import {LoveNotesScreen} from '../../screens/notes/LoveNotesScreen';
import {CustomDrawer} from '../../components/drawerNav/CustomDrawer';

export const AppNavigation = () => {
  const Drawer = createDrawerNavigator();
  const iconsTab = (route, focused, size) => {
    let iconName;
    if (route.name === 'Home') {
      iconName = focused ? 'home' : 'home-outline';
    } else if (route.name === 'LoveNotes') {
      iconName = focused ? 'heart' : 'heart-outline';
    }
    return (
      <Ionicons
        name={iconName}
        size={size}
        color={focused ? 'white' : '#FC5C7D'}
      />
    );
  };
  return (
    <Drawer.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        drawerStyle: {
          backgroundColor: '#231E41',
        },
        drawerActiveBackgroundColor: '#FC5C7D',
        drawerActiveTintColor: 'white',
        drawerIcon: ({focused, size}) => iconsTab(route, focused, size),
        drawerContentStyle: styles.drawer,
        drawerInactiveTintColor: 'white',
      })}
      drawerContent={props => <CustomDrawer {...props} />}>
      <Drawer.Screen name="Home" component={TabNavigation} />
      <Drawer.Screen name="LoveNotes" component={LoveNotesScreen} />
    </Drawer.Navigator>
  );
};

const styles = StyleSheet.create({
  drawer: {
    borderRightWidth: 2,
    borderTopWidth: 1,
    borderTopColor: '#FC5C7D',
    borderRightColor: '#FC5C7D',
    borderTopRightRadius: 20,
  },
});
