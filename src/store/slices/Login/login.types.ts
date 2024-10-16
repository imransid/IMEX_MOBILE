import { type PayloadAction } from '@reduxjs/toolkit';

import { type BaseActionType } from '../../action.type';
import { type LoginRequest, type LoginResponse } from '../../services/auth/auth.service.types';
import { type FetchStatusEnum } from '../../services/fetch.type';

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
    response: LoginResponse | any;
  };
}

export interface LoginFailureActionType extends BaseActionType {
  payload: {
    error: string;
  };
}

export type RefreshTokenActionType = PayloadAction;
