import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {useSelector} from 'react-redux';
import {SwitchSettings} from './SwitchSettings';

export const ItemSecurity = ({
  icon,
  txt,
  enable,
  setSwithSecurity,
  permission,
}) => {
  const {mode} = useSelector(state => state.ui);
  return (
    <>
      <View style={styles.containerSecurity}>
        <View style={styles.containerInfo}>
          <Icon name={icon} size={25} color={mode === 'light' ? 'black' : 'white'} />
          <Text style={[styles.txt, mode === 'light' && styles.txtLight]}>
            {txt}
          </Text>
        </View>
        <SwitchSettings
          enable={enable}
          setSwithSecurity={setSwithSecurity}
          secure={txt}
          permission={permission}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  txt: {
    color: 'white',
    marginLeft: 5,
  },
  containerInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  containerSecurity: {
    flexDirection: 'row',
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  txtLight: {
    color: 'black',
  },
});
