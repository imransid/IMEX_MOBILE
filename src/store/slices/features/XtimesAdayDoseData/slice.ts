import { createSlice } from '@reduxjs/toolkit';

import { X_TIMES_A_DAY_DOSE } from './constants';
import { type IXtimesAdayDoseType } from './types';

const XtimesAdayDoseInitialData: IXtimesAdayDoseType = {
  timeInterval: '',
  time: '',
  dose: ''
};

export const xTimesAdayDoseSlice = createSlice({
  name: X_TIMES_A_DAY_DOSE,
  initialState: XtimesAdayDoseInitialData,
  reducers: {
    getXtimesAdayDoseAction: (state: IXtimesAdayDoseType) => {
      state.timeInterval = '';
      state.time = '';
      state.dose = '';
    }
  }
});

export const { getXtimesAdayDoseAction } = xTimesAdayDoseSlice.actions;

export default xTimesAdayDoseSlice.reducer;
