import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {CardListNote} from './CardListNote';
import {onViewNote} from '../../helpers/fingerPrint';

export const CardNotes = ({notes, navigation}) => {
  const {security} = useSelector(state => state.ui);
  const dispatch = useDispatch();

  const onView = card => {
    onViewNote(card, security, dispatch, navigation);
  };

  return notes.map(card => (
    <CardListNote key={card.id} card={card} onViewNote={onView} />
  ));
};
