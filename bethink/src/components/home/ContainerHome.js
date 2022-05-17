import React from 'react';
import {ScrollView, View, StyleSheet} from 'react-native';
import { ConditionNotes } from './ConditionNotes';
import { Reminders } from './Reminders';
import { SectionMain } from './SectionMain';
export const ContainerHome = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <SectionMain />
        <Reminders />
        <ConditionNotes />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
  },
});
