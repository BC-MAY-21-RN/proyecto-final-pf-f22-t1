import React, {useCallback, useState} from 'react';
import {useFocusEffect} from '@react-navigation/native';
import {View, StyleSheet, ScrollView, RefreshControl} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {getAllNotes} from '../../actions/notes';
import {ContainerMain} from '../../components/home/ContainerMain';
import {Date} from '../../components/home/Date';
import {DisplayUser} from '../../components/home/DisplayUser';
import {LoadingNotes} from '../../components/home/LoadingNotes';
import {LoveNotes} from '../../components/home/LoveNotes';
import {NoLoves} from '../../components/home/NoLoves';
import {Reminders} from '../../components/home/Reminders';
import {Logo} from '../../components/home/Logo';

export const HomeScreen = () => {
  const {notes, loadingNotes} = useSelector(state => state.notes);
  const [refreshing, setRefreshing] = useState(false);
  const {uid} = useSelector(state => state.auth);
  const dispatch = useDispatch();

  const notesLoveIt = notes.filter(note => note.love === true);

  useFocusEffect(
    useCallback(() => {
      dispatch(getAllNotes(uid));
    }, []),
  );

  const onRefresh = () => {
    setRefreshing(true);
    dispatch(getAllNotes(uid));
    setRefreshing(false);
  };

  return (
    <ContainerMain>
      <ScrollView
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>
        <View style={styles.container}>
          <Logo />
          <DisplayUser />
          <View style={styles.containerCenter}>
            <Date />
          </View>
          <Reminders />
          {loadingNotes ? (
            <LoadingNotes />
          ) : notesLoveIt.length > 0 ? (
            <LoveNotes notes={notesLoveIt} />
          ) : (
            <NoLoves />
          )}
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
