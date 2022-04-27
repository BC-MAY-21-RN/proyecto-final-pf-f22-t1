import {StyleSheet} from 'react-native';
export const switchStyles = StyleSheet.create({
  containerSwitch: {
    width: 80,
    height: 30,
    borderWidth: 1,
    borderTopColor: '#FC5C7D',
    borderBottomColor: '#6A82FB',
    borderRightColor: '#6A82FB',
    borderLeftColor: '#FC5C7D',
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'row',
  },
  btnDark: {
    height: 19,
    width: 19,
    backgroundColor: 'white',
    borderRadius: 100,
  },
  btnLight: {
    backgroundColor: '#4FF8A7',
  },
});
