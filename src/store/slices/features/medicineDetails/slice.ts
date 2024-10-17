import { createSlice } from '@reduxjs/toolkit';

import { MEDICINE_DETAILS } from './constants';
import { type IMedicineDetailsType } from './types';

const medicineDetailsInitialData: IMedicineDetailsType = {
  medicineName: '',
  medicineStatus: '',
  takeStatus: '',
  doseQuantity: '',
  doseTime: '',
};

export const medicineDetailsSlice = createSlice({
  name: MEDICINE_DETAILS,
  initialState: medicineDetailsInitialData,
  reducers: {
    getMedicineDetailsAction: (state: IMedicineDetailsType) => {
      state.medicineName = '';
      state.medicineStatus = '';
      state.takeStatus = '';
      state.doseQuantity = '';
      state.doseTime = '';
    }
  }
});

export const { getMedicineDetailsAction } = medicineDetailsSlice.actions;

export const medicineDetailsReducer = medicineDetailsSlice.reducer;
