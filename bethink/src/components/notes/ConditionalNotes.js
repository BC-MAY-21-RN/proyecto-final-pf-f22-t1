import React from 'react';
import {CardNotes} from './CardNotes';
import {NoNotes} from './NoNotes';

export const ConditionalNotes = ({
  notes,
  navigation,
  showModalPin,
  setShowModalPin,
}) => {
  return (
    <>
      {notes.length > 0 ? (
        <CardNotes
          notes={notes}
          navigation={navigation}
          showModalPin={showModalPin}
          setShowModalPin={setShowModalPin}
        />
      ) : (
        <NoNotes mode={mode} />
      )}
    </>
  );
};
