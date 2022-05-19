import React from 'react';
import {CardNotes} from './CardNotes';
import {NoNotes} from './NoNotes';
import {useSelector} from 'react-redux';

export const ConditionalNotes = ({notes, navigation}) => {
  const {mode} = useSelector(state => state.ui)
  return (
    <>
      {notes.length > 0 ? (
        <CardNotes notes={notes} navigation={navigation} />
      ) : (
        <NoNotes mode={mode} />
      )}
    </>
  );
};
