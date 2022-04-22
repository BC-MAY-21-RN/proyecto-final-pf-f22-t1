import React, {useEffect} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AuthNavigation} from './authNavigation/AuthNavigation';
import auth from '@react-native-firebase/auth';
import {useDispatch, useSelector} from 'react-redux';
import {login} from '../reducers/authSlice';
import {HomeScreen} from '../screens/home/HomeScreen';

const Stack = createNativeStackNavigator();

export const Navigation = () => {
  const dispatch = useDispatch();
  const {uid} = useSelector(state => state.auth);
  useEffect(() => {
    auth().onAuthStateChanged(user => {
      if (user?.uid) {
        dispatch(login(user));
      }
    });
  }, [dispatch]);
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      {uid ? (
        <Stack.Screen name="Home" component={HomeScreen} />
      ) : (
        <Stack.Screen name="Auth" component={AuthNavigation} />
      )}
    </Stack.Navigator>
  );
};
