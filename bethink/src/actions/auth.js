import {createAsyncThunk} from '@reduxjs/toolkit';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';
import {
  removeMsgError,
  setMsgErrorLogin,
  setMsgErrorRegister,
} from '../reducers/uiSlice';

GoogleSignin.configure({
  webClientId:
    '629933149872-47agtrrq93qi1ie7ol2d1rd5i9s7pdhg.apps.googleusercontent.com',
});

export const loginWithGoogle = createAsyncThunk('auth/google', async () => {
  try {
    // Get the users ID token
    const {idToken} = await GoogleSignin.signIn();
    // Create a Google credential with the token
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);
    // Sign-in the user with the credential
    return auth().signInWithCredential(googleCredential);
  } catch (error) {
    console.log(error);
  }
});

export const logout = createAsyncThunk('auth/logout', async () => {
  await auth().signOut();
  await GoogleSignin.signOut();
});

export const registerWithEmailAndPassword = createAsyncThunk(
  'auth/register',
  async ({name, email, password}, thunkAPI) => {
    try {
      // thunkAPI.dispatch(setLoading());
      const {user} = await auth().createUserWithEmailAndPassword(
        email,
        password,
      );
      await user.updateProfile({displayName: name});
      thunkAPI.dispatch(removeMsgError());
    } catch (error) {
      thunkAPI.dispatch(setMsgErrorRegister());
      console.log(error);
    }
  },
);

export const loginWithEmailAndPassword = createAsyncThunk(
  'auth/login',
  async ({email, password}, thunkAPI) => {
    try {
      const {user} = await auth().signInWithEmailAndPassword(email, password);
      thunkAPI.dispatch(removeMsgError());
      return user;
    } catch (error) {
      thunkAPI.dispatch(setMsgErrorLogin());
    }
  },
);
