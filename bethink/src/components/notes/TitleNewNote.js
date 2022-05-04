import React, {useState} from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
export const TitleNewNote = ({title, setTtile}) => {
  // const [loveNote, setLoveNote] = useState(false);

  return (
    <View style={styles.containerTitleNote}>
      <TextInput
        style={styles.inputTitle}
        onChangeText={setTtile}
        value={title}
        placeholder={'Title'}
        placeholderTextColor={'grey'}
      />
      <Icon
        name="heart"
        color="red"
        size={35}
        // onPress={() => setLoveNote(state => !state)}
      />
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
