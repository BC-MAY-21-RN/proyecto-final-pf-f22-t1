import React from 'react';
import {ContainerAuth} from '../../components/auth/ContainerAuth';
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
    <ContainerAuth splitScreen={splitScreen}>
      <BodyRegister form={form} onChange={onChange} navigation={navigation} />
    </ContainerAuth>
  );
};
