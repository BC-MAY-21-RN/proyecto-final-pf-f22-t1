import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
const data = [
  {
    id: 1,
    title: 'Medical appointment',
  },
  {
    id: 2,
    title: 'Math exam',
  },
  {
    id: 3,
    title: 'Burger recipe',
  },
  {
    id: 4,
    title: 'Burger recipe',
  },
  {
    id: 5,
    title: 'Burger recipe',
  },
];
export const LoveNotes = () => {
  const CardLoveNotes = ({item}) => (
    <View style={styles.containerCard}>
      <Text style={styles.titleCard}>{item.title}</Text>
      <Icon name="heart" size={50} color="#FC5C7D" />
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.txt}>I love it</Text>
      {data.map(cardLove => (
        <CardLoveNotes item={cardLove} key={cardLove.id} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  txt: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },
  containerCard: {
    height: 70,
    backgroundColor: '#DDD6F3',
    marginVertical: 10,
    borderRadius: 10,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  titleCard: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 18,
  },
});
