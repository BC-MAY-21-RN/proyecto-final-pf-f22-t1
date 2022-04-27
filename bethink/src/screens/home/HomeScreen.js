import React from 'react';
import {View, Image, StyleSheet, ScrollView} from 'react-native';
import {Date} from '../../components/home/Date';
import {DisplayUser} from '../../components/home/DisplayUser';
import {LoveNotes} from '../../components/home/LoveNotes';
import {Reminders} from '../../components/home/Reminders';

export const HomeScreen = () => {
  return (
    <View style={styles.containerMain}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <View style={styles.containerCenter}>
            <Image
              source={require('../../imgs/logo.png')}
              style={styles.logo}
            />
          </View>
          <DisplayUser />
          <View style={styles.containerCenter}>
            <Date />
          </View>
          <Reminders />
          <LoveNotes />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  containerMain: {
    flex: 1,
    backgroundColor: '#231E41',
  },
  containerCenter: {
    alignItems: 'center',
  },
  logo: {
    height: 80,
    width: 150,
  },
  container: {
    marginHorizontal: 20,
  },
});
