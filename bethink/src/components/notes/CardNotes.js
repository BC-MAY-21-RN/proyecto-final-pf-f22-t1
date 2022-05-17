import React from 'react';
import {View, StyleSheet, Text, Image, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {useDispatch, useSelector} from 'react-redux';
import {noteToPin} from '../../reducers/notesSlice';

const colorsPriority = {
  high: '#5DE3C3',
  median: '#F1F29C',
  low: '#E197F3',
};

export const CardNotes = ({
  notes,
  navigation,
  // showModalPin,
  setShowModalPin,
}) => {
  const {security} = useSelector(state => state.ui);
  const dispatch = useDispatch();
  const statusCard = card => {
    return colorsPriority[card.priority];
  };

  const onViewNote = card => {
    // console.log(card);
    if (security.mode === 'pin' && card.security === true) {
      setShowModalPin(true);
      dispatch(noteToPin(card));
    } else {
      navigation.navigate('EditNote', {card});
    }
  };

  const CardsNotes = ({card}) => (
    <View style={[styles.containerCard, {backgroundColor: statusCard(card)}]}>
      {/* <TouchableOpacity onPress={() => navigation.navigate('EditNote', {card})}> */}
      <TouchableOpacity onPress={() => onViewNote(card)}>
        {card.love && (
          <Icon
            name="heart"
            color="#FC5C7D"
            size={30}
            style={styles.iconLove}
          />
        )}
        <View style={styles.containerTitle}>
          <Image
            source={require('../../imgs/notes/notes.png')}
            style={styles.imgCard}
          />
          <Text style={styles.title}>{card.title}</Text>
        </View>
        <Text style={styles.createdAt}>{card.date}</Text>
      </TouchableOpacity>
    </View>
  );
  return notes.map(card => <CardsNotes key={card.id} card={card} />);
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
