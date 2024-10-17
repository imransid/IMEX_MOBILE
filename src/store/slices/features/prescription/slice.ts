import { createSlice } from '@reduxjs/toolkit';

import { PRESCRIPTION } from './constants';
import { type IPrescriptionType } from './types';

const prescriptionInitialData: IPrescriptionType = {
  filePath: '',
};

export const prescriptionSlice = createSlice({
  name: PRESCRIPTION,
  initialState: prescriptionInitialData,
  reducers: {
    getPrescriptionAction: (state: IPrescriptionType) => {
      state.filePath = '';
    }
  }
});

export const { getPrescriptionAction} = prescriptionSlice.actions;

export const prescriptionReducer = prescriptionSlice.reducer;
