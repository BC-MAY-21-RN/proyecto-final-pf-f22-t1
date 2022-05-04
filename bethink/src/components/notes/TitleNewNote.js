import React, {useState} from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {useAnimationLike} from '../../hooks/useAnimationLike';
import {HeartAnimation} from './HeartAnimation';
export const TitleNewNote = ({title, setTtile}) => {
  const [loveNote, setLoveNote] = useState(false);
  const [showAnimation, setShowAnimation] = useState(false);
  const {opacity, move, animation} = useAnimationLike(setShowAnimation);

  const loveIt = () => {
    setLoveNote(true);
    setShowAnimation(true);
    animation();
  };

  const dontLoveIt = () => {
    setLoveNote(false);
  };

  return (
    <View style={styles.containerTitleNote}>
      <TextInput
        style={styles.inputTitle}
        onChangeText={setTtile}
        value={title}
        placeholder={'Title'}
        placeholderTextColor={'grey'}
      />
      {loveNote ? (
        <Icon name="heart" color="#FC5C7D" size={40} onPress={dontLoveIt} />
      ) : (
        <Icon name="heart" color="white" size={35} onPress={loveIt} />
      )}
      {showAnimation && <HeartAnimation move={move} opacity={opacity} />}
    </View>
  );
};

const styles = StyleSheet.create({
  inputTitle: {
    color: 'white',
    fontSize: 20,
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
