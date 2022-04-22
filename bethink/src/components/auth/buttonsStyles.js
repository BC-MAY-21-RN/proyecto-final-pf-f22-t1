import {StyleSheet} from 'react-native';
export const buttonsStyles = StyleSheet.create({
  containerButtons: {
    alignItems: 'center',
  },
  button: {
    borderColor: 'white',
    borderWidth: 1,
    height: 50,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    width: 270,
    marginVertical: 10,
  },
  txtButton: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 23,
  },
  buttonGoogle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  imgGoogle: {
    height: 30,
    width: 30,
  },
});
