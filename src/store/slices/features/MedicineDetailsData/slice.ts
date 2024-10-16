import { createSlice } from '@reduxjs/toolkit';

import { MEDICINE_DETAILS } from './constants';
import { type IMedicineDetailsType } from './types';

const medicineDetailsInitialData: IMedicineDetailsType = {
  medicineName: '',
  genericName: '',
  manufacturerName: '',
  medicineForm: '',
  dosage: '',
  productDetails: '',
  dosageAndAdministration: ''
};

export const medicineDetailsSlice = createSlice({
  name: MEDICINE_DETAILS,
  initialState: medicineDetailsInitialData,
  reducers: {
    getMedicineDetailsAction: (state: IMedicineDetailsType) => {
      state.medicineName = '';
      state.genericName = '';
      state.manufacturerName = '';
      state.medicineForm = '';
      state.dosage = '';
      state.productDetails = '';
      state.dosageAndAdministration = '';
    }
  }
});

export const { getMedicineDetailsAction } = medicineDetailsSlice.actions;

export default medicineDetailsSlice.reducer;
