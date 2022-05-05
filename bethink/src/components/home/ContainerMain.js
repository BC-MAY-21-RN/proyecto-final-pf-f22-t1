import React from 'react';
import {View, StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';
export const ContainerMain = ({children}) => {
  const {mode} = useSelector(state => state.ui);
  return (
    <View
      style={[
        styles.containerMain,
        mode === 'light' && styles.containerMainLight,
      ]}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  containerMain: {
    flex: 1,
    backgroundColor: '#231E41',
  },
  containerMainLight: {
    backgroundColor: 'white',
  },
});
