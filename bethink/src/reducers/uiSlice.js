import {createSlice} from '@reduxjs/toolkit';

export const uiSlice = createSlice({
  name: 'ui',
  initialState: {
    msgErrorLogin: false,
    msgErrorRegister: false,
    mode: 'dark',
    security: {
      secure: false,
      mode: '',
    },
  },
  reducers: {
    setMsgErrorLogin: state => {
      state.msgErrorLogin = true;
    },
    setMsgErrorRegister: state => {
      state.msgErrorRegister = true;
    },
    removeMsgError: state => {
      state.msgErrorLogin = false;
      state.msgErrorRegister = false;
    },
    toggleModeUi: (state, {payload}) => {
      state.mode = payload;
    },
    setSecurity: (state, {payload}) => {
      state.security.secure = true;
      state.security.mode = payload;
    },
    removeSecurity: state => {
      state.security.secure = false;
      state.security.mode = '';
    },
  },
});

export const {
  setMsgErrorLogin,
  setMsgErrorRegister,
  removeMsgError,
  toggleModeUi,
  setSecurity,
  removeSecurity,
} = uiSlice.actions;

export default uiSlice.reducer;
