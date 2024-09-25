import { createSlice } from '@reduxjs/toolkit';

import { ONCE_A_DAY_DOSE } from './constants';
import { type IOnceAdayDoseType } from './types';

const OnceAdayDoseInitialData: IOnceAdayDoseType = {
  time: '',
  dose: ''
};

export const onceAdayDoseSlice = createSlice({
  name: ONCE_A_DAY_DOSE,
  initialState: OnceAdayDoseInitialData,
  reducers: {
    getOnceAdayDoseAction: (state: IOnceAdayDoseType) => {
      state.time = '';
      state.dose = '';
    }
  }
});

export const { getOnceAdayDoseAction } = onceAdayDoseSlice.actions;

export default onceAdayDoseSlice.reducer;
