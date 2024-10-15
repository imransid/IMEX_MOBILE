import { createSlice } from '@reduxjs/toolkit';

import { FOUR_TIMES_A_DAY_DOSE } from './constants';
import { type IFourTimesAdayDoseType } from './types';

const FourTimesAdayDoseInitialData: IFourTimesAdayDoseType = {
  time: '',
  dose: ''
};

export const fourTimesAdayDoseSlice = createSlice({
  name: FOUR_TIMES_A_DAY_DOSE,
  initialState: FourTimesAdayDoseInitialData,
  reducers: {
    getFourTimesAdayDoseAction: (state: IFourTimesAdayDoseType) => {
      state.time = '';
      state.dose = '';
    }
  }
});

export const { getFourTimesAdayDoseAction } = fourTimesAdayDoseSlice.actions;

export default fourTimesAdayDoseSlice.reducer;
