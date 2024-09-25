import { createSlice } from '@reduxjs/toolkit';

import { EVERY_X_WEEKS_DOSE } from './constants';
import { type IEveryXweeksDoseType } from './types';

const everyXweeksDoseInitialData: IEveryXweeksDoseType = {
  week: '',
  date: '',
  timeInterval: '',
  time: '',
  dose: ''
};

export const everyXweeksDoseSlice = createSlice({
  name: EVERY_X_WEEKS_DOSE,
  initialState: everyXweeksDoseInitialData,
  reducers: {
    getEveryXweeksDoseAction: (state: IEveryXweeksDoseType) => {
      state.week = '';
      state.date = '';
      state.timeInterval = '';
      state.time = '';
      state.dose = '';
    }
  }
});

export const { getEveryXweeksDoseAction } = everyXweeksDoseSlice.actions;

export default everyXweeksDoseSlice.reducer;
