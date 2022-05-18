import React from 'react';
import {StyleSheet} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {HomeScreen} from '../../screens/home/HomeScreen';
import {NotesScreen} from '../../screens/notes/NotesScreen';
import {RemindersScreenToDo} from '../../screens/reminders/RemindersScreenToDo';
import {RemindersScreenDone} from '../../screens/reminders/ReminderScreensDone';
import {IconsTab} from '../../components/navigation/IconsTab';
import {useSelector} from 'react-redux';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NewNoteScreen} from '../../screens/notes/NewNoteScreen';
import {RemindersScreen} from '../../screens/reminders/RemindersScreen';

const NotesNavigation = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="NotesMain" component={NotesScreen} />
      <Stack.Screen name="NewNote" component={NewNoteScreen} />
    </Stack.Navigator>
  );
};

const ReminderScreen = () => {
  const Tab = createMaterialTopTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarLabelStyle: {fontSize: 12},
        //tabBarItemStyle: {width: 100},
        tabBarStyle: {backgroundColor: 'powderblue'},
      }}>
      <Tab.Screen name="To Do" component={RemindersScreenToDo} />
      <Tab.Screen name="Done" component={RemindersScreenDone} />
    </Tab.Navigator>
  );
};

export const TabNavigation = () => {
  const Tab = createBottomTabNavigator();
  const {mode} = useSelector(store => store.ui);
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, size}) => (
          <IconsTab focused={focused} size={size} route={route} />
        ),
        tabBarActiveTintColor: mode === 'dark' ? '#FC5C7D' : '#231E41',
        tabBarInactiveTintColor: 'gray',
        headerShown: false,
        tabBarStyle: [styles.tab, mode === 'light' && styles.tabLight],
      })}>
      <Tab.Screen
        name="HomeAPP"
        component={HomeScreen}
        options={{title: 'Home'}}
      />
      <Tab.Screen name="Notes" component={NotesNavigation} />
      <Tab.Screen name="Reminder" component={ReminderScreen} />
      <Tab.Screen name="Reminders" component={RemindersScreen} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tab: {
    backgroundColor: '#231E41',
    borderTopColor: '#FC5C7D',
    borderTopWidth: 2,
  },
  tabLight: {
    backgroundColor: 'white',
  },
});
