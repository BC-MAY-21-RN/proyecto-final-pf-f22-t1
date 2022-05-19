import React from 'react';
import {CardsDone} from './CardsDone';

const data = [
  {
    id: 1,
    title: 'Medical date',
    date: '24 june, 2022',
    time: '3:00 p.m',
  },
  {
    id: 2,
    title: 'Math exam',
    date: '24 june, 2022',
    time: '4:00 p.m',
  },
  {
    id: 3,
    title: 'Burger recipe',
    date: '24 june, 2022',
    time: '5:00 p.m',
  },
  {
    id: 5,
    title: 'Meet',
    date: '24 june, 2022',
    time: '3:00 p.m',
  },
  {
    id: 6,
    title: 'Dinner',
    date: '24 june, 2022',
    time: '3:00 p.m',
  },
];

export const CardDone = () => {
  const cards = data.map(card => <CardsDone key={card.id} card={card} />);

  return cards;
};
