import {createSlice} from '@reduxjs/toolkit';
import {logout} from '../actions/auth';
export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    uid: '',
    name: '',
  },
  reducers: {
    login: (state, action) => {
      state.uid = action.payload._user.uid;
      state.name = action.payload._user.displayName;
    },
  },
  extraReducers: builder => {
    builder.addCase(logout.fulfilled, state => {
      state.uid = '';
      state.name = '';
    });
  },
});

export const {login} = authSlice.actions;

export default authSlice.reducer;
