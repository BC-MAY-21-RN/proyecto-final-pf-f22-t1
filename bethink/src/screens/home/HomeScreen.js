import React, {useCallback, useState} from 'react';
import {useFocusEffect} from '@react-navigation/native';
import {View, StyleSheet, ScrollView, RefreshControl} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {getAllNotes} from '../../actions/notes';
import {ContainerMain} from '../../components/home/ContainerMain';
import {Date} from '../../components/home/Date';
import {DisplayUser} from '../../components/home/DisplayUser';
import {Reminders} from '../../components/home/Reminders';
import {Logo} from '../../components/home/Logo';
import {ConditionNotes} from '../../components/home/ConditionNotes'

export const HomeScreen = () => {
  const {notes, loadingNotes} = useSelector(state => state.notes);
  const {uid} = useSelector(state => state.auth);
  const dispatch = useDispatch();
  const notesLoveIt = notes.filter(note => note.love === true);

  useFocusEffect(
    useCallback(() => {
      dispatch(getAllNotes(uid));
    }, []),
  );

  return (
    <ContainerMain>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <Logo />
          <DisplayUser />
          <View style={styles.containerCenter}>
            <Date />
          </View>
          <Reminders />
          <ConditionNotes notesLoveIt={notesLoveIt} loadingNotes={loadingNotes} />
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
