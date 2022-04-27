import React from 'react';
import {StyleSheet} from 'react-native';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {HomeScreen} from '../../screens/home/HomeScreen';
import {NotesScreen} from '../../screens/notes/NotesScreen';
import {RemindersScreen} from '../../screens/reminders/RemindersScreen';
import {IconsTab} from '../../components/navigation/IconsTab';

export const TabNavigation = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, size}) => (
          <IconsTab focused={focused} size={size} route={route} />
        ),
        tabBarActiveTintColor: '#FC5C7D',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: styles.tab,
        headerShown: false,
      })}>
      <Tab.Screen
        name="HomeAPP"
        component={HomeScreen}
        options={{title: 'Home'}}
      />
      <Tab.Screen name="Notes" component={NotesScreen} />
      <Tab.Screen name="Reminders" component={RemindersScreen} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tab: {
    backgroundColor: '#231E41',
    // borderTopLeftRadius: 15,
    // borderTopRightRadius: 15,
    borderTopColor: '#FC5C7D',
    borderTopWidth: 2,
  },
});
