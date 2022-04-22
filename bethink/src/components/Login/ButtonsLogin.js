import React, {useEffect, useState} from 'react';
import {useDispatch} from 'react-redux';
import {loginWithEmailAndPassword} from '../../actions/auth';
import {ButtonsAuth} from '../auth/ButtonsAuth';
export const ButtonsLogin = ({form}) => {
  const [enableBtn, setEnableBtn] = useState(true);
  const {email, password} = form;
  const dispatch = useDispatch();

  useEffect(() => {
    if (email.length !== 0 || password.length !== 0) {
      setEnableBtn(false);
    }
  }, [email, password]);

  const authLogin = () => {
    dispatch(loginWithEmailAndPassword({email, password}));
  };
  return (
    <ButtonsAuth
      txtBtn="Log in"
      txtBtnGoogle="Log in with Google"
      onAuth={authLogin}
      enableBtn={enableBtn}
    />
  );
};
