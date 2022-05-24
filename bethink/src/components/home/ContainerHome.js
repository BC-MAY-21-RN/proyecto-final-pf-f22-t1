import React from 'react';
import {ScrollView, View, StyleSheet} from 'react-native';
import {ConditionNotes} from './ConditionNotes';
import {Reminders} from './Reminders';
import {SectionMain} from './SectionMain';
import {ModalPinNote} from '../notes/ModalPinNote';

export const ContainerHome = ({navigation}) => {
  // console.log(dayjs.unix(reminders[0].date.seconds));
  return (
    <>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <SectionMain />
          <Reminders />
          <ConditionNotes navigation={navigation} />
        </View>
      </ScrollView>
      <ModalPinNote navigation={navigation} />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
  },
});
