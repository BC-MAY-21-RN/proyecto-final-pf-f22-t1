import React from 'react';

import {createDrawerNavigator} from '@react-navigation/drawer';
import {TabNavigation} from './TabNavigation';
import {LoveNotesScreen} from '../../screens/notes/LoveNotesScreen';
import {CustomDrawer} from '../../components/drawerNav/CustomDrawer';
import {IconsDrawer} from '../../components/navigation/IconsDrawer';
import {useSelector} from 'react-redux';
import {SettingsScreen} from '../../screens/settings/SettingsScreen';

const configDrawer = {
  headerShown: false,
  drawerActiveBackgroundColor: '#FC5C7D',
  drawerActiveTintColor: 'white',
};

export const AppNavigation = () => {
  const Drawer = createDrawerNavigator();
  const {mode} = useSelector(state => state.ui);
  return (
    <Drawer.Navigator
      screenOptions={({route}) => ({
        ...configDrawer,
        drawerInactiveTintColor: mode === 'dark' ? 'white' : '#FC5C7D',
        drawerStyle: {
          backgroundColor: mode === 'dark' ? '#231E41' : 'white',
        },
        drawerIcon: ({focused, size}) => (
          <IconsDrawer focused={focused} size={size} route={route} />
        ),
      })}
      drawerContent={props => <CustomDrawer {...props} />}>
      <Drawer.Screen name="Home" component={TabNavigation} />
      <Drawer.Screen
        name="LoveNotes"
        component={LoveNotesScreen}
        options={{title: 'Love notes'}}
      />
      <Drawer.Screen name="Settings" component={SettingsScreen} />
    </Drawer.Navigator>
  );
};
