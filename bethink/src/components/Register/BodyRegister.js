import React from 'react';
import {ImageSection} from '../auth/ImageSection';
import {OtherAccount} from '../auth/OtherAccount';
import {ButtonsRegister} from './ButtonRegister';
import {FormRegister} from './FormRegister';

export const BodyRegister = ({form, onChange, navigation}) => {
  return (
    <>
      <ImageSection section="Sign up" />
      <FormRegister form={form} onChange={onChange} />
      <ButtonsRegister form={form} />
      <OtherAccount
        txtAccount="Already have an account?"
        txtGo="Log in"
        navigation={navigation}
        navigate="LoginScreen"
      />
    </>
  );
};
