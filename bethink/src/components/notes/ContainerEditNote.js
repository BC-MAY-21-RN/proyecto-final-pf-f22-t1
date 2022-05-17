import React from 'react';
import { AddNote } from './AddNote';
import { AddNoteName } from './AddNoteName';
import { BtnEditNote } from './BtnEditNote';
import { ModalCompleteForm } from './ModalCompleteForm';
import { PriorityNote } from './PriorityNote';
import { SecurityNote } from './SecurityNote';
import { TitleNewNote } from './TitleNewNote';

export const ContainerEditNote = ({navigation, formNote, setFormNote}) => {
  return (
    <>
      <AddNoteName navigation={navigation} title="Edit note" />
      <TitleNewNote formNote={formNote} setFormNote={setFormNote} />
      <SecurityNote formNote={formNote} setFormNote={setFormNote} />
      <AddNote formNote={formNote} setFormNote={setFormNote} />
      <PriorityNote formNote={formNote} setFormNote={setFormNote} />
      <BtnEditNote
        formNote={formNote}
        setFormNote={setFormNote}
        navigation={navigation}
      />
      <ModalCompleteForm formNote={formNote} setFormNote={setFormNote} />
    </>
  );
};
