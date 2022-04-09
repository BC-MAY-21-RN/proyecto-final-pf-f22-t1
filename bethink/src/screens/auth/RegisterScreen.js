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

export const RegisterScreen = ({navigation}) => {
  const windowHeight = Dimensions.get('window').height;
  const splitScreen = windowHeight / 10;
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={[styles.containerLogo, {height: splitScreen * 2}]}>
          <Image source={require('../../imgs/logo.png')} />
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
          <View style={styles.containerForm}>
            <Text style={styles.label}>Name</Text>
            <TextInput style={styles.input} />
            <Text style={styles.label}>Email</Text>
            <TextInput style={styles.input} />
            <Text style={styles.label}>Password</Text>
            <TextInput style={styles.input} />
          </View>
          <View style={styles.containerButtons}>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.txtButton}>Sign up</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button, styles.buttonGoogle]}>
              <Image
                source={require('../../imgs/google.png')}
                style={styles.imgGoogle}
              />
              <Text style={styles.txtButton}>Sign up with Google</Text>
            </TouchableOpacity>
          </View>
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
  containerForm: {
    marginVertical: 15,
  },
  label: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },
  input: {
    backgroundColor: 'white',
    borderRadius: 10,
    marginVertical: 5,
    color: 'black',
    padding: 10,
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
});
