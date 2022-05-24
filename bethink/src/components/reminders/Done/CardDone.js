import React from 'react';
import {CardsDone} from './CardsDone';


export const CardDone = ({listReminders}) => {
  const cards = listReminders.map(card => <CardsDone key={card.id} card={card} />);

  return cards;
};
