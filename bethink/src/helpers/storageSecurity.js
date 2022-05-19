import AsyncStorage from '@react-native-async-storage/async-storage';

export const storageSecurity = async value => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem('@storage_security', jsonValue);
  } catch (e) {
    console.log(error);
  }
};

export const getStorageSecurity = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem('@storage_security')
    return jsonValue != null ? JSON.parse(jsonValue) : {mode: ''};
    
  } catch (e) {
    // error reading value
    console.log('falló');
    console.log(e);
  }
};
