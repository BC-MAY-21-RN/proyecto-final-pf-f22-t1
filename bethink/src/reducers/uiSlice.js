import {createSlice} from '@reduxjs/toolkit';

export const uiSlice = createSlice({
  name: 'ui',
  initialState: {
    msgErrorLogin: false,
    msgErrorRegister: false,
    mode: 'dark',
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
  },
});

export const {
  setMsgErrorLogin,
  setMsgErrorRegister,
  removeMsgError,
  toggleModeUi,
} = uiSlice.actions;

export default uiSlice.reducer;
