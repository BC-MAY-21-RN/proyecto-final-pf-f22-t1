import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {useDispatch, useSelector} from 'react-redux';
import {SectionName} from './SectionName';
import {onViewNote} from '../../helpers/fingerPrint';

export const LoveNotes = ({notes, navigation}) => {
  const {security} = useSelector(state => state.ui);
  const dispatch = useDispatch();
  const onView = card => {
    onViewNote(card, security, dispatch, navigation);
  };
  const CardLoveNotes = ({item}) => (
    <TouchableOpacity onPress={() => onView(item)}>
      <View style={styles.containerCard}>
        <Text style={styles.titleCard}>{item.title}</Text>
        <Icon name="heart" size={50} color="#FC5C7D" />
      </View>
    </TouchableOpacity>
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
