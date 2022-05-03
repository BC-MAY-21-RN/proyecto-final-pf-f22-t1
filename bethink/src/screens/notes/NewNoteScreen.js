import React, {useState} from 'react';
import {View, StyleSheet, Text, TextInput, Switch} from 'react-native';
import {ContainerMain} from '../../components/home/ContainerMain';

import Icon from 'react-native-vector-icons/Ionicons';

export const NewNoteScreen = () => {
  const [text, setText] = useState('');
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  return (
    <ContainerMain>
      <View style={styles.mainContainer}>
        <View style={styles.titleContainer}>
          <Icon name="arrow-back-outline" color="#FC5C7D" size={45} />
          <Text style={styles.title}>New note</Text>
        </View>
        <View style={styles.titleNotes}>
          <TextInput
            style={styles.inputTitle}
            onChangeText={setText}
            value={text}
            placeholder={'Title'}
            placeholderTextColor={'grey'}
          />
          <Icon name="heart" color="white" size={30} />
        </View>
        <View style={styles.dateAndSecurity}>
          <Text style={styles.txtSecurity}>24 June, 2022</Text>
          <View style={styles.security}>
            <Text style={styles.txtSecurity}>Security</Text>
            <Switch
              trackColor={{false: '#767577', true: '#81b0ff'}}
              thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch}
              value={isEnabled}
            />
          </View>
        </View>
      </View>
    </ContainerMain>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    marginHorizontal: 20,
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 50,
    paddingRight: 50,
  },
  title: {
    color: 'white',
    fontSize: 30,
    marginLeft: 50,
    marginRight: 40,
  },

  inputTitle: {
    color: 'white',
    fontSize: 20,
  },

  titleNotes: {
    flexDirection: 'row',
    marginTop: 30,
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomColor: '#6A82FB',
    borderBottomWidth: 4,
  },
  dateAndSecurity: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  security: {
    flexDirection: 'row',
  },
  txtSecurity: {
    color: 'grey',
  },
});
