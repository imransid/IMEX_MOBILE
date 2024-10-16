import { createSlice } from '@reduxjs/toolkit';

import { THREE_TIMES_A_DAY_DOSE } from './constants';
import { type IThreeTimesAdayDoseType } from './types';

const ThreeTimesAdayDoseInitialData: IThreeTimesAdayDoseType = {
  time: '',
  dose: ''
};

export const threeTimesAdayDoseSlice = createSlice({
  name: THREE_TIMES_A_DAY_DOSE,
  initialState: ThreeTimesAdayDoseInitialData,
  reducers: {
    getThreeTimesAdayDoseAction: (state: IThreeTimesAdayDoseType) => {
      state.time = '';
      state.dose = '';
    }
  }
});

export const { getThreeTimesAdayDoseAction } = threeTimesAdayDoseSlice.actions;

export default threeTimesAdayDoseSlice.reducer;
