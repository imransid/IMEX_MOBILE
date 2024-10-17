import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

import { SETTING } from './constants';
import { type IPayload, type ISettingState } from './types';
const settingsInitialState: ISettingState = {
  isLoading: false,
  appLoadFirstTime: true
};

export const settingSlice = createSlice({
  name: SETTING,
  initialState: settingsInitialState,
  reducers: {
    setGlobalLoaderAction: (state: ISettingState, payload: PayloadAction<IPayload>) => {
      state.isLoading = payload.payload.status;
    },
    checkingLoader: (state: ISettingState) => {
      state.isLoading = false;
    },
    stopLoader: (state: ISettingState) => {
      state.isLoading = false;
    },
    startLoader: (state: ISettingState) => {
      state.isLoading = true;
    },
    updateFirstTimeQrScreen: (state: ISettingState) => {
      state.appLoadFirstTime = false;
    }
  }
});

export const {
  setGlobalLoaderAction,
  checkingLoader,
  stopLoader,
  startLoader,
  updateFirstTimeQrScreen
} = settingSlice.actions;

export const settingsReducer = settingSlice.reducer;
