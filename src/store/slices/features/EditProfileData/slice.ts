import { createSlice } from '@reduxjs/toolkit';

import { EDIT_PROFILE } from './constants';
import { type IEditProfileType } from './types';

const editProfileInitialData: IEditProfileType = {
  fullName: '',
  mobileNumber: '',
  gender: '',
  birthDate: ''
};

export const EditProfileSlice = createSlice({
  name: EDIT_PROFILE,
  initialState: editProfileInitialData,
  reducers: {
    getEditProfileAction: (state: IEditProfileType) => {
      state.fullName = '';
      state.mobileNumber = '';
      state.gender = '';
      state.birthDate = '';
    }
  }
});

export const { getEditProfileAction } = EditProfileSlice.actions;

export default EditProfileSlice.reducer;
