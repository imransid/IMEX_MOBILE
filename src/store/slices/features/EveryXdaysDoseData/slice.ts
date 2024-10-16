import { createSlice } from '@reduxjs/toolkit';

import { EVERY_X_DAYS_DOSE } from './constants';
import { type IEveryXdaysDoseType } from './types';

const everyXdaysDoseInitialData: IEveryXdaysDoseType = {
  day: '',
  date: '',
  timeInterval: '',
  time: '',
  dose: ''
};

export const everyXdaysDoseSlice = createSlice({
  name: EVERY_X_DAYS_DOSE,
  initialState: everyXdaysDoseInitialData,
  reducers: {
    getEveryXdaysDoseAction: (state: IEveryXdaysDoseType) => {
      state.day = '';
      state.date = '';
      state.timeInterval = '';
      state.time = '';
      state.dose = '';
    }
  }
});

export const { getEveryXdaysDoseAction } = everyXdaysDoseSlice.actions;

export default everyXdaysDoseSlice.reducer;
