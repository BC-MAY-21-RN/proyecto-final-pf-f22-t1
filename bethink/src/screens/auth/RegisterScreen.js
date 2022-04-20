import React from 'react';
import {View, ScrollView} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {authScreenStyles} from '../../components/auth/authScreenStyles';
import {LogoAuth} from '../../components/auth/LogoAuth';
import {BodyRegister} from '../../components/Register/BodyRegister';
import {heightScreen} from '../../helpers/heightScreen';
import {useForm} from '../../hooks/useForm';

const initialForm = {
  name: '',
  email: '',
  password: '',
};
const splitScreen = heightScreen();

export const RegisterScreen = ({navigation}) => {
  const {form, onChange} = useForm(initialForm);
  return (
    <View style={authScreenStyles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <LogoAuth splitScreen={splitScreen} />
        <LinearGradient
          colors={['#FC5C7D', '#6A82FB']}
          style={[
            authScreenStyles.containerGradient,
            {height: splitScreen * 8},
          ]}>
          <BodyRegister
            form={form}
            onChange={onChange}
            navigation={navigation}
          />
        </LinearGradient>
      </ScrollView>
    </View>
  );
};
