import React from 'react';
import {View, Text, Button} from 'react-native';
import {useDispatch} from 'react-redux';
import {logout} from '../../actions/auth';

export const HomeScreen = () => {
  const dispatch = useDispatch();
  return (
    <View>
      <Text style={{color: 'black'}}>Home</Text>
      <Button onPress={() => dispatch(logout())} title="Log out" />
    </View>
  );
};
