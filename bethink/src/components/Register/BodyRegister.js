import React from 'react';
import {ButtonsAuth} from '../auth/ButtonsAuth';
import {ImageSection} from '../auth/ImageSection';
import {OtherAccount} from '../auth/OtherAccount';
import {FormRegister} from './FormRegister';

export const BodyRegister = ({form, onChange, navigation}) => {
  return (
    <>
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
    </>
  );
};
