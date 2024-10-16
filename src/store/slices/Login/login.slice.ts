import { createSlice } from '@reduxjs/toolkit';

import { FetchStatusEnum } from '../../services/fetch.type';
import {
  type LoginSliceStateType,
  type LoginSuccessActionType
} from '../../slices/Login/login.types';

const initState: LoginSliceStateType = {
  loginFetchStatus: FetchStatusEnum.IDLE,
  loginError: undefined,
  loginResponse: undefined,
  isLoading: false,
  user: undefined,
  loginStatus: false
};

const loginSlice = createSlice({
  name: 'login',
  initialState: initState,
  reducers: {
    resetAllState: () => ({ ...initState }),

    loginSuccess: (state, action: LoginSuccessActionType) => {
      state.loginFetchStatus = FetchStatusEnum.SUCCESS;
      state.loginStatus = true;
      state.user = action.payload.response;
      state.loginResponse = action.payload.response;
      state.isLoading = false;
    },
    loginFailure: state => {
      state.loginStatus = false;
      state.isLoading = false;
    },
    startLogin: state => {
      state.isLoading = false;
    },
    stopLoader: state => {
      state.isLoading = false;
    },
    resetLogin: () => {
      return initState;
    }
  }
});

export const loginActions = loginSlice.actions;
export const loginReducer = loginSlice.reducer;
