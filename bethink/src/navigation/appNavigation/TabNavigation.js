import React from 'react';
import {StyleSheet} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {HomeScreen} from '../../screens/home/HomeScreen';
import {NotesScreen} from '../../screens/notes/NotesScreen';
import {RemindersScreen} from '../../screens/reminders/RemindersScreen';
export const TabNavigation = () => {
  const Tab = createBottomTabNavigator();
  const iconsTab = (route, focused, size) => {
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
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, size}) => iconsTab(route, focused, size),
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
