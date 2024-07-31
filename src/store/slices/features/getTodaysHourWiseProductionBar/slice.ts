import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

import { type XendTableGraphData } from '@/models/endTableCheck';

import { GET_TODAYS_HOUR_WISE_PRODUCTION_BAR_TYPE } from './constants';
import { type UsersStateType } from './types';

const endTableGraphData: XendTableGraphData = {
  previousAvg: 0,
  previousDayProduction: [],
  previousMax: 0,
  previousMin: 0,
  todayProduction: [],
  todaysAvg: 0,
  todaysMax: 0,
  todaysMin: 0
};

const usersInitialState: UsersStateType = {
  data: endTableGraphData,
  isLoading: false,
  errors: '',
  loginStatus: false
};

export const getTodaysHourWiseProductionBarSlice = createSlice({
  name: GET_TODAYS_HOUR_WISE_PRODUCTION_BAR_TYPE,
  initialState: usersInitialState,
  reducers: {
    getGraphDataAction: (state: UsersStateType) => {
      state.isLoading = true;
      state.errors = '';
      state.loginStatus = false;
    },
    setGraphDataAction: (state: UsersStateType, payload: PayloadAction<XendTableGraphData>) => {
      state.isLoading = false;
      state.data = payload.payload;
      state.loginStatus = true;
      state.errors = ''; // Clear any previous errors
    }
  }
});

export const { getGraphDataAction, setGraphDataAction } =
  getTodaysHourWiseProductionBarSlice.actions;

export default getTodaysHourWiseProductionBarSlice.reducer;
