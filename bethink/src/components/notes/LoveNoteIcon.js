import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {useSelector} from 'react-redux';
export const LoveNoteIcon = ({love, dontLoveIt, loveIt}) => {
  const {mode} = useSelector(store => store.ui);
  return (
    <>
      {love ? (
        <Icon name="heart" color="#FC5C7D" size={40} onPress={dontLoveIt} />
      ) : (
        <Icon
          name="heart-outline"
          color={mode === 'dark' ? 'white' : 'black'}
          size={35}
          onPress={loveIt}
        />
      )}
    </>
  );
};
