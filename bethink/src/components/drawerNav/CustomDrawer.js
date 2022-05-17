import React from 'react';
import {StyleSheet} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useDispatch} from 'react-redux';
import {logout} from '../../actions/auth';
export const CustomDrawer = props => {
  const dispatch = useDispatch();
  return (
    <DrawerContentScrollView {...props} style={styles.drawer}>
      <DrawerItemList {...props} />
      <DrawerItem
        style={styles.item}
        label="Log out"
        onPress={() => dispatch(logout())}
        icon={() => <Ionicons name="log-out-outline" color="white" size={25} />}
        labelStyle={styles.labelTxt}
      />
    </DrawerContentScrollView>
  );
};
const styles = StyleSheet.create({
  labelTxt: {
    color: 'white',
  },
  item: {
    backgroundColor: '#6A82FB',
  },
  drawer: {
    borderRightWidth: 2,
    borderTopWidth: 1,
    borderTopColor: '#FC5C7D',
    borderRightColor: '#FC5C7D',
    borderTopRightRadius: 20,
  },
});
