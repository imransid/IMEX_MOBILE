import { createSlice } from '@reduxjs/toolkit';

import { EVERY_X_MONTHS_DOSE } from './constants';
import { type IEveryXmonthsDoseType } from './types';

const everyXmonthsDoseInitialData: IEveryXmonthsDoseType = {
  month: '',
  date: '',
  timeInterval: '',
  time: '',
  dose: ''
};

export const everyXmonthsDoseSlice = createSlice({
  name: EVERY_X_MONTHS_DOSE,
  initialState: everyXmonthsDoseInitialData,
  reducers: {
    getEveryXmonthsDoseAction: (state: IEveryXmonthsDoseType) => {
      state.month = '';
      state.date = '';
      state.timeInterval = '';
      state.time = '';
      state.dose = '';
    }
  }
});

export const { getEveryXmonthsDoseAction } = everyXmonthsDoseSlice.actions;

export default everyXmonthsDoseSlice.reducer;
