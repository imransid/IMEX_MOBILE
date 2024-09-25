import { createSlice } from '@reduxjs/toolkit';

import { ADD_PRESCRIPTION } from './constants';
import { type IAddPrescriptionType } from './types';

const AddPrescriptionInitialData: IAddPrescriptionType = {
  prescription: ''
};

export const addPrescriptionSlice = createSlice({
  name: ADD_PRESCRIPTION,
  initialState: AddPrescriptionInitialData,
  reducers: {
    getAddPrescriptionAction: (state: IAddPrescriptionType) => {
      state.prescription = '';
    }
  }
});

export const { getAddPrescriptionAction } = addPrescriptionSlice.actions;

export default addPrescriptionSlice.reducer;
