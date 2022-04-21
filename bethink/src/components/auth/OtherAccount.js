import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export const OtherAccount = ({txtAccount, txtGo, navigation, navigate}) => {
  return (
    <View style={styles.containerAccount}>
      <Text>{txtAccount}</Text>
      <Text
        style={styles.txtOther}
        onPress={() => navigation.navigate(navigate)}>
        {txtGo}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  containerAccount: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  txtOther: {
    textDecorationLine: 'underline',
    marginLeft: 5,
  },
});
