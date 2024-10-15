import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

import { type AccessTokenInfo } from '@/store/types/types';

import { USERS } from './constants';
import { type ILogInPayload, type UsersStateType } from './types';

const usersInitialState: UsersStateType = {
  user: {
    data: null,
    isLoading: false,
    errors: '',
    loginStatus: false,
  },
};

export const usersSlice = createSlice({
  name: USERS,
  initialState: usersInitialState,
  reducers: {
    // Start loading and reset any previous errors
    getUserAction: (state: UsersStateType, { payload }: PayloadAction<ILogInPayload>) => {
      state.user.isLoading = true;
      state.user.errors = ''; // Reset previous errors
      state.user.loginStatus = false;
      state.user.data = null; // Reset user data on new login attempt
    },

    // Handle login errors
    getUserErrorAction: (state: UsersStateType, { payload: error }: PayloadAction<string>) => {
      state.user.isLoading = false;
      state.user.errors = error; // Store error message
      state.user.data = null; // Ensure data is null on error
    },

    // Handle successful login
    getUserSuccessAction: (state: UsersStateType, { payload }: PayloadAction<AccessTokenInfo>) => {
      state.user.isLoading = false;
      state.user.data = payload; // Store user data on successful login
      state.user.loginStatus = true; // Set login status to true
      state.user.errors = ''; // Clear any previous errors
    },

    // Logout action
    logoutUser: (state: UsersStateType) => {
      state.user.isLoading = false;
      state.user.errors = '';
      state.user.loginStatus = false;
      state.user.data = null; // Clear user data on logout
    },

    // Clear previous error message
    clearUserError: (state: UsersStateType) => {
      state.user.errors = '';
    },
  },
});

// Export actions
export const { getUserAction, getUserErrorAction, getUserSuccessAction, logoutUser, clearUserError } =
  usersSlice.actions;

// Export reducer
export default usersSlice.reducer;
