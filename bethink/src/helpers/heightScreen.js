import {Dimensions} from 'react-native';

export const heightScreen = () => {
  const windowHeight = Dimensions.get('window').height;
  const splitScreen = windowHeight / 10;

  return splitScreen;
};
