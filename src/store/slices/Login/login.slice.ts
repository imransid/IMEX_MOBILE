import { createSlice } from "@reduxjs/toolkit";
import { FetchStatusEnum } from "../../services/fetch.type";

import {
  LoginSliceStateType,
  LoginActionType,
  LoginSuccessActionType,
  LoginFailureActionType,
} from "../../slices/Login/login.types";

const initState: LoginSliceStateType = {
  loginFetchStatus: FetchStatusEnum.IDLE,
  loginError: undefined,
  loginResponse: undefined,
  isLoading: false,
  user: undefined,
  loginStatus: false,
};

const loginSlice = createSlice({
  name: "login",
  initialState: initState,
  reducers: {
    resetAllState: () => ({ ...initState }),

    login: (state, _action: LoginActionType) => {
      state.loginFetchStatus = FetchStatusEnum.FETCHING;
      state.loginError = "";
      state.isLoading = true
    },
    loginSuccess: (state, action: LoginSuccessActionType) => {
      state.loginFetchStatus = FetchStatusEnum.SUCCESS;
      state.loginStatus = true;
      state.user = action.payload.response as any;
      state.loginResponse = action.payload.response;
      state.isLoading = false
    },
    loginFailure: (state, action: LoginFailureActionType) => {
      state.loginFetchStatus = FetchStatusEnum.FAILURE;
      state.loginError = action.payload.error;
      state.loginStatus = false;
      state.isLoading = false
    },
    resetLogin: () => {
      return initState;
    },
    logout: () => {},
  },
});

export const loginActions = loginSlice.actions;
export const loginReducer = loginSlice.reducer;
