import React from 'react';
import {View, TouchableOpacity, Image, StyleSheet, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { TitleNoteCard } from './TitleNoteCard';

const colorsPriority = {
  high: '#5DE3C3',
  median: '#F1F29C',
  low: '#E197F3',
};

export const CardListNote = ({card, onViewNote}) => {
  const statusCard = card => {
    return colorsPriority[card.priority];
  };
  return (
    <View style={[styles.containerCard, {backgroundColor: statusCard(card)}]}>
      <TouchableOpacity onPress={() => onViewNote(card)}>
        {card.love && (
          <Icon
            name="heart"
            color="#FC5C7D"
            size={30}
            style={styles.iconLove}
          />
        )}
        <TitleNoteCard title={card.title} />
        <Text style={styles.createdAt}>{card.date}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  containerCard: {
    height: 115,
    marginVertical: 10,
    borderRadius: 20,
    padding: 10,
    justifyContent: 'space-around',
  },
  iconLove: {
    alignSelf: 'flex-end',
  },
  createdAt: {
    alignSelf: 'flex-end',
    color: 'black',
    opacity: 0.6,
  },
});
