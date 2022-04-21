import React from 'react';
import {ButtonsAuth} from '../auth/ButtonsAuth';
import {ImageSection} from '../auth/ImageSection';
import {OtherAccount} from '../auth/OtherAccount';
import {FormLogin} from './FormLogin';

export const BodyLogin = ({form, onChange, navigation}) => {
  return (
    <>
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
    </>
  );
};
