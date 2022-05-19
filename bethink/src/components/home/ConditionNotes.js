import React from 'react';
import { useSelector } from 'react-redux';
import {LoadingNotes} from './LoadingNotes';
import {LoveNotes} from './LoveNotes';
import {NoLoves} from './NoLoves';

export const ConditionNotes = ({navigation}) => {
  const {notes, loadingNotes} = useSelector(state => state.notes);
  const notesLoveIt = notes.filter(note => note.love === true);
  return (
    <>
      {loadingNotes ? (
        <LoadingNotes />
      ) : notesLoveIt.length > 0 ? (
        <LoveNotes notes={notesLoveIt} navigation={navigation} />
      ) : (
        <NoLoves />
      )}
    </>
  );
};
