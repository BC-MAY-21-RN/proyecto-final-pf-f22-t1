import React from 'react';
import {ImageSection} from '../auth/ImageSection';
import {OtherAccount} from '../auth/OtherAccount';
import {ButtonsLogin} from './ButtonsLogin';
import {FormLogin} from './FormLogin';

export const BodyLogin = ({form, onChange, navigation}) => {
  return (
    <>
      <ImageSection section="Log in" />
      <FormLogin form={form} onChange={onChange} />
      <ButtonsLogin form={form} />
      <OtherAccount
        txtAccount="I don’t have an account?"
        txtGo="Sign up"
        navigation={navigation}
        navigate="RegisterScreen"
      />
    </>
  );
};
