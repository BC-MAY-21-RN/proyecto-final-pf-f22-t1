import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {RemindersScreenToDo} from '../../screens/reminders/RemindersScreenToDo';

const Tab = createMaterialTopTabNavigator();

export const RemindersTab = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="ToDo" component={RemindersScreenToDo} />
      <Tab.Screen name="Done" component={SettingsScreen} />
    </Tab.Navigator>
  );
};
