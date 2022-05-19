import {StyleSheet} from 'react-native';
export const stylesBtnPin = StyleSheet.create({
  btnNumber: {
    backgroundColor: '#231E41',
    width: 50,
    height: 50,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',

    shadowColor: '#231E41',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 10,
  },
  txtNumber: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
  },
});
