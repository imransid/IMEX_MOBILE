import { createSlice } from '@reduxjs/toolkit';

import { TWICE_A_DAY_DOSE } from './constants';
import { type ITwiceAdayDoseType } from './types';

const TwiceAdayDoseInitialData: ITwiceAdayDoseType = {
  time: '',
  dose: ''
};

export const twiceAdayDoseSlice = createSlice({
  name: TWICE_A_DAY_DOSE,
  initialState: TwiceAdayDoseInitialData,
  reducers: {
    getTwiceAdayDoseAction: (state: ITwiceAdayDoseType) => {
      state.time = '';
      state.dose = '';
    }
  }
});

export const { getTwiceAdayDoseAction } = twiceAdayDoseSlice.actions;

export default twiceAdayDoseSlice.reducer;
