import React, {useState} from 'react';
import {AddNote} from './AddNote';
import {AddNoteName} from './AddNoteName';
import {BtnEditNote} from './BtnEditNote';
import {DeleteNote} from './DeleteNote';
import {ModalCompleteForm} from './ModalCompleteForm';
import {ModalDelete} from './ModalDelete';
import {PriorityNote} from './PriorityNote';
import {SecurityNote} from './SecurityNote';
import {TitleNewNote} from './TitleNewNote';

export const ContainerEditNote = ({navigation, formNote, setFormNote}) => {
  const [showModalDelete, setShowModalDelete] = useState(false);
  return (
    <>
      <AddNoteName navigation={navigation} title="Edit note" />
      <TitleNewNote formNote={formNote} setFormNote={setFormNote} />
      <SecurityNote formNote={formNote} setFormNote={setFormNote} />
      <AddNote formNote={formNote} setFormNote={setFormNote} />
      <DeleteNote setShowModalDelete={setShowModalDelete} />
      <PriorityNote formNote={formNote} setFormNote={setFormNote} />
      <BtnEditNote
        formNote={formNote}
        setFormNote={setFormNote}
        navigation={navigation}
      />
      <ModalCompleteForm formNote={formNote} setFormNote={setFormNote} />
      <ModalDelete
        showModalDelete={showModalDelete}
        setShowModalDelete={setShowModalDelete}
        formNote={formNote}
        navigation={navigation}
      />
    </>
  );
};
