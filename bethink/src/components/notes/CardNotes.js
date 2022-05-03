import React from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
const data = [
  {
    id: 1,
    title: 'Medical appointment',
    priority: 'high',
    love: true,
    createdAt: '24 june, 2022',
  },
  {
    id: 2,
    title: 'Math exam',
    priority: 'median',
    love: false,
    createdAt: '24 june, 2022',
  },
  {
    id: 3,
    title: 'Burger recipe',
    priority: 'low',
    love: false,
    createdAt: '24 june, 2022',
  },
  {
    id: 4,
    title: 'Burger recipe',
    priority: 'high',
    love: true,
    createdAt: '24 june, 2022',
  },
  {
    id: 5,
    title: 'Burger recipe',
    priority: 'low',
    love: false,
    createdAt: '24 june, 2022',
  },
  {
    id: 6,
    title: 'Burger recipe',
    priority: 'low',
    love: false,
    createdAt: '24 june, 2022',
  },
  {
    id: 7,
    title: 'Burger recipe',
    priority: 'high',
    love: true,
    createdAt: '24 june, 2022',
  },
  {
    id: 8,
    title: 'Burger recipe',
    priority: 'low',
    love: false,
    createdAt: '24 june, 2022',
  },
];

const colorsPriority = {
  high: '#5DE3C3',
  median: '#F1F29C',
  low: '#E197F3',
};

export const CardNotes = () => {
  const statusCard = card => {
    return colorsPriority[card.priority];
  };
  const CardsNotes = ({card}) => (
    <View style={[styles.containerCard, {backgroundColor: statusCard(card)}]}>
      {card.love && (
        <Icon name="heart" color="#FC5C7D" size={30} style={styles.iconLove} />
      )}
      <View style={styles.containerTitle}>
        <Image
          source={require('../../imgs/notes/notes.png')}
          style={styles.imgCard}
        />
        <Text style={styles.title}>{card.title}</Text>
      </View>
      <Text style={styles.createdAt}>{card.createdAt}</Text>
    </View>
  );
  return data.map(card => <CardsNotes key={card.id} card={card} />);
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
  title: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 20,
    marginLeft: 15,
  },
  imgCard: {
    height: 50,
    width: 50,
  },
  containerTitle: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  createdAt: {
    alignSelf: 'flex-end',
    color: 'black',
    opacity: 0.6,
  },
});
