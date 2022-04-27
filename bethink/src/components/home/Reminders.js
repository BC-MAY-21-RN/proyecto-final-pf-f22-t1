import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export const Reminders = () => {
  const data = [
    {
      id: '1',
      hora: '9:00 a.m',
      actividad: 'Sciences exam',
    },
    {
      id: '2',
      hora: '1:30 p.m',
      actividad: 'Go to the store',
    },
    {
      id: '3',
      hora: '7:30 a.m',
      actividad: 'Dinner with Dania',
    },
  ];

  const card = ({item}) => (
    <LinearGradient colors={['#CC2B5E', '#0ABFBC']} style={styles.cardList}>
      <View style={styles.card}>
        <Text style={styles.textCard}>{item.hora}</Text>
        <Text style={styles.textCard}>{item.actividad}</Text>
      </View>
      
    </LinearGradient>
  );  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Reminders for today</Text>
      <FlatList data={data} renderItem={card} keyExtractor={item => item.id} horizontal style={styles.list}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 150,
    marginTop: 15
  },

  card: {
    alignItems: 'space-between'
  },

  title: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
    alignSelf: 'center'
  },
  cardList: {
    flexDirection: 'row',
    alignContent: 'space-between'
  },

  textCard: {
    color: 'white',
  }
});
