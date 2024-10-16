import { createSlice } from '@reduxjs/toolkit';

import { MONTHLY_DOSE } from './constants';
import { type IMonthlyDoseType } from './types';

const monthlyDoseInitialData: IMonthlyDoseType = {
  days: '',
  timeInterval: '',
  time: '',
  dose: ''
};

export const monthlyDoseSlice = createSlice({
  name: MONTHLY_DOSE,
  initialState: monthlyDoseInitialData,
  reducers: {
    getMonthlyDoseAction: (state: IMonthlyDoseType) => {
      state.days = '';
      state.timeInterval = '';
      state.time = '';
      state.dose = '';
    }
  }
});

export const { getMonthlyDoseAction } = monthlyDoseSlice.actions;

export default monthlyDoseSlice.reducer;
