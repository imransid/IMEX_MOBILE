import { createSlice } from '@reduxjs/toolkit';

import { MEDICINE_DOSES } from './constants';
import { type IMedicineDosesType } from './types';

const MedicineDosesInitialData: IMedicineDosesType = {
  daily: '',
  weekly: '',
  monthly: '',
  everyXday: '',
  everyXweeks: '',
  everyXmonths: ''
};

export const medicineDoseSlice = createSlice({
  name: MEDICINE_DOSES,
  initialState: MedicineDosesInitialData,
  reducers: {
    getMedicineDosesAction: (state: IMedicineDosesType) => {
      state.daily = '';
      state.weekly = '';
      state.monthly = '';
      state.everyXday = '';
      state.everyXweeks = '';
      state.everyXmonths = '';
    }
  }
});

export const { getMedicineDosesAction } = medicineDoseSlice.actions;

export default medicineDoseSlice.reducer;
