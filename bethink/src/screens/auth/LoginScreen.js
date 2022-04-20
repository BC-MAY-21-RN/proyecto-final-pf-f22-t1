import React from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {ButtonsAuth} from '../../components/auth/ButtonsAuth';
import {ImageSection} from '../../components/auth/ImageSection';
import {LogoAuth} from '../../components/auth/LogoAuth';
import {OtherAccount} from '../../components/auth/OtherAccount';
import {FormLogin} from '../../components/Login/FormLogin';
import {heightScreen} from '../../helpers/heightScreen';
import {useForm} from '../../hooks/useForm';

const initialForm = {
  name: '',
  email: '',
  password: '',
};

export const LoginScreen = ({navigation}) => {
  const {form, onChange} = useForm(initialForm);
  const splitScreen = heightScreen();
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <LogoAuth splitScreen={splitScreen} />
        <LinearGradient
          colors={['#FC5C7D', '#6A82FB']}
          style={[styles.containerLogin, {height: splitScreen * 8}]}>
          <ImageSection section="Log in" />
          <FormLogin form={form} onChange={onChange} />
          <ButtonsAuth
            txtBtn="Log in"
            txtBtnGoogle="Log in with Google"
            form={form}
            navigation={navigation}
          />
          <OtherAccount
            txtAccount="I don’t have an account?"
            txtGo="Sign up"
            navigation={navigation}
            navigate="RegisterScreen"
          />
        </LinearGradient>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerLogin: {
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    padding: 20,
    justifyContent: 'space-around',
  },
});
