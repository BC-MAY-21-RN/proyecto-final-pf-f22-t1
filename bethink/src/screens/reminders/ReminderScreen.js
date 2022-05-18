import React from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {RemindersScreenToDo} from '../../screens/reminders/RemindersScreenToDo';
import {RemindersScreenDone} from '../../screens/reminders/RemindersScreenDone';

const Tab = createMaterialTopTabNavigator();

export const ReminderScreen = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarLabelStyle: {fontSize: 12},
          tabBarItemStyle: {width: 100},
          tabBarStyle: {backgroundColor: 'powderblue'},
        }}>
        <Tab.Screen name="ToDo" component={RemindersScreenToDo} />
        <Tab.Screen name="Done" component={RemindersScreenDone} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
