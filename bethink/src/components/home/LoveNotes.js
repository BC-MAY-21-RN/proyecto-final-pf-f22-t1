import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {SectionName} from './SectionName';

export const LoveNotes = ({notes}) => {
  const CardLoveNotes = ({item}) => (
    <View style={styles.containerCard}>
      <Text style={styles.titleCard}>{item.title}</Text>
      <Icon name="heart" size={50} color="#FC5C7D" />
    </View>
  );

  return (
    <View style={styles.container}>
      <SectionName text="I love it" />
      {notes.map(cardLove => (
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
