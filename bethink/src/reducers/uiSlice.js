import {createSlice} from '@reduxjs/toolkit';

export const uiSlice = createSlice({
  name: 'ui',
  initialState: {
    msgErrorLogin: false,
    msgErrorRegister: false,
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
  },
});

export const {setMsgErrorLogin, setMsgErrorRegister, removeMsgError} =
  uiSlice.actions;

export default uiSlice.reducer;
