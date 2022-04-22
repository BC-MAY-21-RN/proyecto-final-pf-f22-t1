import React, {useEffect, useState} from 'react';
import {useDispatch} from 'react-redux';
import {registerWithEmailAndPassword} from '../../actions/auth';
import {ButtonsAuth} from '../auth/ButtonsAuth';
export const ButtonsRegister = ({form}) => {
  const [enableBtn, setEnableBtn] = useState(true);
  const {name, email, password} = form;
  const dispatch = useDispatch();

  useEffect(() => {
    if (email.length !== 0 || password.length !== 0 || name.length !== 0) {
      setEnableBtn(false);
    }
  }, [email, password, name]);

  const authRegister = () => {
    dispatch(registerWithEmailAndPassword(name, email, password));
  };
  return (
    <ButtonsAuth
      txtBtn="Sign up"
      txtBtnGoogle="Sign up with Google"
      onAuth={authRegister}
      enableBtn={enableBtn}
    />
  );
};
