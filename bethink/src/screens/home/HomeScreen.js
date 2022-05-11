import React, {useCallback, useState} from 'react';
import {useFocusEffect} from '@react-navigation/native';
import {View, StyleSheet, ScrollView} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {getAllNotes} from '../../actions/notes';
import {ContainerMain} from '../../components/home/ContainerMain';
import {Reminders} from '../../components/home/Reminders';
import {ConditionNotes} from '../../components/home/ConditionNotes';
import {SectionMain} from '../../components/home/SectionMain';

export const HomeScreen = () => {
  const {uid} = useSelector(state => state.auth);
  const dispatch = useDispatch();
  useFocusEffect(
    useCallback(() => {
      dispatch(getAllNotes(uid));
    }, []),
  );

  return (
    <ContainerMain>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <SectionMain />
          <Reminders />
          <ConditionNotes />
        </View>
      </ScrollView>
    </ContainerMain>
  );
};

const styles = StyleSheet.create({
  containerCenter: {
    alignItems: 'center',
  },
  container: {
    marginHorizontal: 20,
  },
});
