import React from 'react';
import {CardNotes} from './CardNotes';
import {NoNotes} from './NoNotes';

export const ConditionalNotes = ({notes, navigation}) => {
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
