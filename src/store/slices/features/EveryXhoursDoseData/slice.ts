import { createSlice } from '@reduxjs/toolkit';

import { EVERY_X_HOURS_DOSE } from './constants';
import { type IEveryXhoursDoseType } from './types';

const EveryXhoursDoseInitialData: IEveryXhoursDoseType = {
  timeInterval: '',
  time: '',
  dose: ''
};

export const everyXhoursDoseSlice = createSlice({
  name: EVERY_X_HOURS_DOSE,
  initialState: EveryXhoursDoseInitialData,
  reducers: {
    getEveryXhoursDoseAction: (state: IEveryXhoursDoseType) => {
      state.timeInterval = '';
      state.time = '';
      state.dose = '';
    }
  }
});

export const { getEveryXhoursDoseAction } = everyXhoursDoseSlice.actions;

export default everyXhoursDoseSlice.reducer;
