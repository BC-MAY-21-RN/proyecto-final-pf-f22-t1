import React from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Dimensions,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { ButtonRegister } from '../../components/Register/ButtonRegister';
import { FormRegister } from '../../components/Register/FormRegister';

export const RegisterScreen = ({navigation}) => {
  const windowHeight = Dimensions.get('window').height;
  const splitScreen = windowHeight / 10;
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={[styles.containerLogo, {height: splitScreen * 2}]}>
          <Image source={require('../../imgs/logo.png')} style={[styles.logo]}/>
        </View>
        <LinearGradient
          colors={['#FC5C7D', '#6A82FB']}
          style={[styles.containerLogin, {height: splitScreen * 8}]}>
          <View style={styles.containerImg}>
            <Text style={styles.title}>Sign up</Text>
            <Image
              source={require('../../imgs/register.png')}
              style={styles.img}
            />
          </View>
          <FormRegister/>
          <ButtonRegister/>
          <View style={styles.containerAccount}>
            <Text>Already have an account?</Text>
            <Text
              style={styles.txtOther}
              onPress={() => navigation.navigate('LoginScreen')}>
              Log in
            </Text>
          </View>
        </LinearGradient>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerLogo: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerLogin: {
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    padding: 20,
    justifyContent: 'space-around',
  },
  containerImg: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  title: {
    color: 'black',
    fontSize: 35,
    fontWeight: 'bold',
  },
  img: {
    height: 150,
    width: 150,
  },
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
  containerAccount: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  txtOther: {
    textDecorationLine: 'underline',
    marginLeft: 5,
  },
  logo: {
    maxHeight: 100,
    maxWidth: 350,
},
});
