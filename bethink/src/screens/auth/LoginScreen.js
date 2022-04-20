import React from 'react';
import {ContainerAuth} from '../../components/auth/ContainerAuth';
import {BodyLogin} from '../../components/Login/BodyLogin';
import {heightScreen} from '../../helpers/heightScreen';
import {useForm} from '../../hooks/useForm';

const initialForm = {
  name: '',
  email: '',
  password: '',
};
const splitScreen = heightScreen();

export const LoginScreen = ({navigation}) => {
  const {form, onChange} = useForm(initialForm);
  return (
    <ContainerAuth splitScreen={splitScreen}>
      <BodyLogin form={form} onChange={onChange} navigation={navigation} />
    </ContainerAuth>
  );
};
