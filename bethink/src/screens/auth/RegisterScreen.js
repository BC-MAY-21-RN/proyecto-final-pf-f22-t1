import React from 'react';
import {View, ScrollView, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {ButtonsAuth} from '../../components/auth/ButtonsAuth';
import {ImageSection} from '../../components/auth/ImageSection';
import {LogoAuth} from '../../components/auth/LogoAuth';
import {OtherAccount} from '../../components/auth/OtherAccount';
import {FormRegister} from '../../components/Register/FormRegister';
import {heightScreen} from '../../helpers/heightScreen';
import {useForm} from '../../hooks/useForm';

const initialForm = {
  name: '',
  email: '',
  password: '',
};

export const RegisterScreen = ({navigation}) => {
  const {form, onChange} = useForm(initialForm);
  const splitScreen = heightScreen();
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <LogoAuth splitScreen={splitScreen} />
        <LinearGradient
          colors={['#FC5C7D', '#6A82FB']}
          style={[styles.containerRegister, {height: splitScreen * 8}]}>
          <ImageSection section="Sign up" />
          <FormRegister form={form} onChange={onChange} />
          <ButtonsAuth
            txtBtn="Sign up"
            txtBtnGoogle="Sign up with Google"
            form={form}
            navigation={navigation}
          />
          <OtherAccount
            txtAccount="Already have an account?"
            txtGo="Log in"
            navigation={navigation}
            navigate="LoginScreen"
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
  containerRegister: {
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    padding: 20,
    justifyContent: 'space-around',
  },
});
