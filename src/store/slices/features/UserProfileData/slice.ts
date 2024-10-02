import { createSlice } from '@reduxjs/toolkit';

import { USER_PROFILE } from './constants';
import { type IUserProfileType } from './types';

const userProfileInitialData: IUserProfileType = {
  fullName: '',
  mobileNumber: '',
  gender: '',
  birthDate: ''
};

export const UserProfileSlice = createSlice({
  name: USER_PROFILE,
  initialState: userProfileInitialData,
  reducers: {
    getUserProfileAction: (state: IUserProfileType) => {
      state.fullName = '';
      state.mobileNumber = '';
      state.gender = '';
      state.birthDate = '';
    }
  }
});

export const { getUserProfileAction } = UserProfileSlice.actions;

export default UserProfileSlice.reducer;
