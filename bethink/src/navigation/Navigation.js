import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AuthNavigation} from './authNavigation/AuthNavigation';

const Stack = createNativeStackNavigator();

export const Navigation = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Auth" component={AuthNavigation} />
    </Stack.Navigator>
  );
};
