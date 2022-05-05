import React, {useState} from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';

import {useAnimationLike} from '../../hooks/useAnimationLike';
import {HeartAnimation} from './HeartAnimation';
import {LoveNoteIcon} from './LoveNoteIcon';

export const TitleNewNote = ({formNote, setFormNote}) => {
  const {title, love} = formNote;
  const [showAnimation, setShowAnimation] = useState(false);
  const {opacity, move, animation} = useAnimationLike(setShowAnimation);
  const {mode} = useSelector(store => store.ui);

  const loveIt = () => {
    setFormNote({...formNote, love: true});
    setShowAnimation(true);
    animation();
  };

  const dontLoveIt = () => {
    setFormNote({...formNote, love: false});
  };

  return (
    <View style={styles.containerTitleNote}>
      <TextInput
        style={[styles.inputTitle, mode === 'light' && styles.inputTitleLight]}
        onChangeText={value => setFormNote({...formNote, title: value})}
        value={title}
        placeholder={'Title'}
        placeholderTextColor={'grey'}
      />
      <LoveNoteIcon love={love} loveIt={loveIt} dontLoveIt={dontLoveIt} />
      {showAnimation && <HeartAnimation move={move} opacity={opacity} />}
    </View>
  );
};

const styles = StyleSheet.create({
  inputTitle: {
    color: 'white',
    fontSize: 20,
  },
  inputTitleLight: {
    color: 'black',
  },
  containerTitleNote: {
    flexDirection: 'row',
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomColor: '#6A82FB',
    borderBottomWidth: 4,
  },
});
