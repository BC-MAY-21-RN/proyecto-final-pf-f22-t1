import React from 'react';

import {createDrawerNavigator} from '@react-navigation/drawer';
import {TabNavigation} from './TabNavigation';
import {LoveNotesScreen} from '../../screens/notes/LoveNotesScreen';
import {CustomDrawer} from '../../components/drawerNav/CustomDrawer';
import {IconsDrawer} from '../../components/navigation/IconsDrawer';

const configDrawer = {
  headerShown: false,
  drawerStyle: {
    backgroundColor: '#231E41',
  },
  drawerActiveBackgroundColor: '#FC5C7D',
  drawerActiveTintColor: 'white',
  drawerInactiveTintColor: 'white',
};

export const AppNavigation = () => {
  const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator
      screenOptions={({route}) => ({
        ...configDrawer,
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
    </Drawer.Navigator>
  );
};
