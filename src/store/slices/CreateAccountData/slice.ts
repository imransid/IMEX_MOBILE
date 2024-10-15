import { createSlice } from '@reduxjs/toolkit';

import { CREATE_ACCOUNT } from './constants';
import { type ICreateAccountType } from './types';

const createAccountInitialData: ICreateAccountType = {
  fullName: '',
  mobileNumber: '',
  emailAddress: '',
  password: '',
  gender: '',
  birthDate: ''
};

export const CreateAccountSlice = createSlice({
  name: CREATE_ACCOUNT,
  initialState: createAccountInitialData,
  reducers: {
    getCreateAccountAction: (state: ICreateAccountType) => {
      state.fullName = '';
      state.mobileNumber = '';
      state.emailAddress = '';
      state.password = '';
      state.gender = '';
      state.birthDate = '';
    }
  }
});

export const { getCreateAccountAction } = CreateAccountSlice.actions;

export default CreateAccountSlice.reducer;
