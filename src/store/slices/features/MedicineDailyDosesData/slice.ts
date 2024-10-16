import { createSlice } from '@reduxjs/toolkit';

import { MEDICINE_DAILY_DOSES } from './constants';
import { type IMedicineDailyDosesType } from './types';

const MedicineDailyDosesInitialData: IMedicineDailyDosesType = {
  onceAday: '',
  twiceAday: '',
  threeTimesAday: '',
  fourTimesAday: '',
  xTimesAday: '',
  everyXhours: ''
};

export const medicineDailyDosesSlice = createSlice({
  name: MEDICINE_DAILY_DOSES,
  initialState: MedicineDailyDosesInitialData,
  reducers: {
    getMedicineDailyDosesAction: (state: IMedicineDailyDosesType) => {
      state.onceAday = '';
      state.twiceAday = '';
      state.threeTimesAday = '';
      state.fourTimesAday = '';
      state.xTimesAday = '';
      state.everyXhours = '';
    }
  }
});

export const { getMedicineDailyDosesAction } = medicineDailyDosesSlice.actions;

export default medicineDailyDosesSlice.reducer;
