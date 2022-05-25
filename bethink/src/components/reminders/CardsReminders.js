import React from 'react';
import {CardReminders} from './CardReminders';

export const CardsReminders = ({listReminders}) => {
  const cards = listReminders.map(card => <CardReminders key={card.id} card={card} />);

  return cards;
};
