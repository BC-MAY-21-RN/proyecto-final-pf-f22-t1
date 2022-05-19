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
import {Text, View} from 'react-native';

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
  const {mode} = useSelector(state => state.ui);
  return (
    <>
      <View
        style={[
          styles.tabReminder,
          mode === 'light' && styles.tabReminderLight,
        ]}>
        <Text style={[styles.title, mode === 'light' && styles.titleLight]}>
          Reminders
        </Text>
      </View>
      <Tab.Navigator
        screenOptions={{
          tabBarLabelStyle: {
            fontSize: 18,
            color: mode === 'light' ? 'black' : 'white',
          },
          tabBarStyle: {
            backgroundColor: mode === 'light' ? 'white' : '#231E41',
            borderColor: '#6A82FB',
            borderWidth: 2,
          },
          tabBarActiveTintColor: '#e91e63',
          tabBarIndicatorStyle: {backgroundColor: '#4FF8A7', height: 5},
        }}>
        <Tab.Screen name="To Do" component={RemindersScreenToDo} />
        <Tab.Screen name="Done" component={RemindersScreenDone} />
      </Tab.Navigator>
    </>
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
      <Tab.Screen name="Reminders" component={ReminderScreen} />
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

  title: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 25,
    alignSelf: 'center',
    marginTop: 30,
    marginBottom: 30,
  },

  tabReminder: {
    backgroundColor: '#231E41',
  },
  tabReminderLight: {
    backgroundColor: 'white',
  },

  titleLight: {
    color: 'black',
  },
});
