import React from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';
import {CardReminders} from './CardReminders';

const data = [
  {
    id: 1,
    title: 'Medical appointment',
    date: '24 june, 2022',
  },
  {
    id: 2,
    title: 'Math exam',
    date: '24 june, 2022',
  },
  {
    id: 3,
    title: 'Burger recipe',
    date: '24 june, 2022',
  },
  {
    id: 4,
    title: 'Burger recipe',
    date: '24 june, 2022',
  },
  {
    id: 5,
    title: 'Burger recipe',
    date: '24 june, 2022',
  },
  {
    id: 6,
    title: 'Burger recipe',
    date: '24 june, 2022',
  },
  {
    id: 7,
    title: 'Burger recipe',
    date: '24 june, 2022',
  },
  {
    id: 8,
    title: 'Burger recipe',
    date: '24 june, 2022',
  },
];

export const CardsReminders = () => {
  const cards = data.map(card => <CardReminders key={card.id} card={card} />);

  return {cards};
};
