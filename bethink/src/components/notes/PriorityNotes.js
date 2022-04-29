import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {SectionName} from '../home/SectionName';

const emoji1 = require('../../imgs/notes/emoji1.png');
const emoji2 = require('../../imgs/notes/emoji2.png');
const emoji3 = require('../../imgs/notes/emoji3.png');

export const PriorityNotes = () => {
  const ItemPriority = ({image, colorIndicator}) => (
    <View style={styles.containerPriority}>
      <Image source={image} style={styles.img} />
      <View style={[styles.indicator, {backgroundColor: colorIndicator}]} />
    </View>
  );

  return (
    <View>
      <SectionName text="Priority" />
      <View style={styles.contaniner}>
        <ItemPriority image={emoji1} colorIndicator="#E197F3" />
        <ItemPriority image={emoji2} colorIndicator="#5DE3C3" />
        <ItemPriority image={emoji3} colorIndicator="#F1F29C" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  txt: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },
  img: {
    height: 35,
    width: 35,
  },
  indicator: {
    width: 70,
    height: 9,
    borderRadius: 3,
    marginTop: 5,
  },
  contaniner: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 20,
  },
  containerPriority: {
    alignItems: 'center',
  },
});
