import { createSlice } from '@reduxjs/toolkit';
import {
  changeIsAdminLocalStorage,
  getIsAdminFromLocalStorage,
  getTokenFromLocalStorage,
  KEY_LOCAL_STORAGE,
  setTokenFromLocalStorage
} from '../../../services/localStorage.service';

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    token: getTokenFromLocalStorage(),
    isAdmin: getIsAdminFromLocalStorage()
  },
  reducers: {
    removeAuth: (state) => {
      state.token = null;
      localStorage.removeItem(KEY_LOCAL_STORAGE);
      window.location.replace('/auth');
    },
    setIsAdmin: (state, action) => {
      state.isAdmin = action.payload;
      changeIsAdminLocalStorage(action.payload);
    },
    setAuth: (state, action) => {
      state.token = action.payload.token;
      state.isAdmin = action.payload.isAdmin;
      setTokenFromLocalStorage(action.payload.token, action.payload.isAdmin);
    }
  }
});

export const { removeAuth, setAuth, setIsAdmin } = authSlice.actions;
export default authSlice.reducer;
