import { BaseActionType } from "../../action.type";
import { PayloadAction } from "@reduxjs/toolkit";
import { LoginRequest, LoginResponse } from "../../services/auth/auth.service.types";
import { FetchStatusEnum } from "../../services/fetch.type";

export interface LoginSliceStateType {
  loginFetchStatus: FetchStatusEnum;
  loginError?: string;
  loginResponse?: LoginResponse;
  isLoading: boolean;
  loginStatus: boolean;
  user?: LoginResponse;
}

export interface LoginActionType extends BaseActionType {
  payload: {
    request: LoginRequest;
  };
}

export interface LoginSuccessActionType extends BaseActionType {
  payload: {
    response: LoginResponse;
  };
}

export interface LoginFailureActionType extends BaseActionType {
  payload: {
    error: string;
  };
}

export type RefreshTokenActionType = PayloadAction;
