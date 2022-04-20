import React from 'react';
import {View, ScrollView} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {authScreenStyles} from './authScreenStyles';
import {LogoAuth} from './LogoAuth';
export const ContainerAuth = ({children, splitScreen}) => {
  return (
    <View style={authScreenStyles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <LogoAuth splitScreen={splitScreen} />
        <LinearGradient
          colors={['#FC5C7D', '#6A82FB']}
          style={[
            authScreenStyles.containerGradient,
            {height: splitScreen * 8},
          ]}>
          {children}
        </LinearGradient>
      </ScrollView>
    </View>
  );
};
