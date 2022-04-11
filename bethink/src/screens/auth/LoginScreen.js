import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  Dimensions,
  ScrollView,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {ButtonLogin} from '../../components/Login/ButtonLogin';
import {FormLogin} from '../../components/Login/FormLogin';

export const LoginScreen = ({navigation}) => {
  const windowHeight = Dimensions.get('window').height;
  const splitScreen = windowHeight / 10;
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={[styles.containerLogo, {height: splitScreen * 2}]}>
          <Image source={require('../../imgs/logo.png')} style={[styles.logo]} />
        </View>
        <LinearGradient
          colors={['#FC5C7D', '#6A82FB']}
          style={[styles.containerLogin, {height: splitScreen * 8}]}>
          <View style={styles.containerImg}>
            <Image
              source={require('../../imgs/login.png')}
              style={styles.img}
            />
            <Text style={styles.title}>Log in</Text>
          </View>
          <FormLogin />
          <ButtonLogin />
          <View style={styles.containerAccount}>
            <Text>I don’t have an account?</Text>
            <Text
              style={styles.txtOther}
              onPress={() => navigation.navigate('RegisterScreen')}>
              Sign up
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
    height: 130,
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
  containerAccount: {
    flexDirection: 'row',
    justifyContent: 'center',
    // marginVertical: 140,
  },
  txtOther: {
    textDecorationLine: 'underline',
    marginLeft: 5,
  },
  logo: {
    maxHeight: 100,
    maxWidth: 350,
    
  }
});
