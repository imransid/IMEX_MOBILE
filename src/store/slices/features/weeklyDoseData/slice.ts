import { createSlice } from '@reduxjs/toolkit';

import { WEEKLY_DOSE } from './constants';
import { type IWeeklyDoseType } from './types';

const weeklyDoseInitialData: IWeeklyDoseType = {
  choosenDays: '',
  timeInterval: '',
  time: '',
  dose: ''
};

export const weeklyDoseSlice = createSlice({
  name: WEEKLY_DOSE,
  initialState: weeklyDoseInitialData,
  reducers: {
    getWeeklyDoseAction: (state: IWeeklyDoseType) => {
      state.choosenDays = '';
      state.timeInterval = '';
      state.time = '';
      state.dose = '';
    }
  }
});

export const { getWeeklyDoseAction } = weeklyDoseSlice.actions;

export default weeklyDoseSlice.reducer;
