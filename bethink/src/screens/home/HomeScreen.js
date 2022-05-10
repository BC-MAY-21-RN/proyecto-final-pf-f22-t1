import React, {useEffect} from 'react';
import {View, Image, StyleSheet, ScrollView, Text} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {getAllNotes} from '../../actions/notes';
import {ContainerMain} from '../../components/home/ContainerMain';
import {Date} from '../../components/home/Date';
import {DisplayUser} from '../../components/home/DisplayUser';
import {LoveNotes} from '../../components/home/LoveNotes';
import {NoLoves} from '../../components/home/NoLoves';
import {Reminders} from '../../components/home/Reminders';

export const HomeScreen = () => {
  const {notes, loadingNotes} = useSelector(state => state.notes);
  const {uid} = useSelector(state => state.auth);
  const dispatch = useDispatch();

  const notesLoveIt = notes.filter(note => note.love === true);
  console.log(notesLoveIt);

  useEffect(() => {
    dispatch(getAllNotes(uid));
  }, [dispatch, uid]);

  return (
    <ContainerMain>
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
          {loadingNotes ?
            (<Text>Cargando</Text>)
            : notesLoveIt.length > 0 ? <LoveNotes notes={notesLoveIt} /> : <NoLoves />
          }
          {/* {notesLoveIt.length > 0 ? <LoveNotes notes={notesLoveIt} /> : <NoLoves />} */}
        </View>
      </ScrollView>
    </ContainerMain>
  );
};

const styles = StyleSheet.create({
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
