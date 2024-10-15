import { createSlice } from '@reduxjs/toolkit';

import { SET_MEDICINE_REMINDERS } from './constants';
import { type ISetMedicineRemindersType } from './types';

const SetMedicineRemindersInitialData: ISetMedicineRemindersType = {
  totalRequired: '',
  currentStock: '',
  medicinesLeft: ''
};

export const setMedicineRemindersSlice = createSlice({
  name: SET_MEDICINE_REMINDERS,
  initialState: SetMedicineRemindersInitialData,
  reducers: {
    getSetMedicineRemindersAction: (state: ISetMedicineRemindersType) => {
      state.totalRequired = '';
      state.currentStock = '';
      state.medicinesLeft = '';
    }
  }
});

export const { getSetMedicineRemindersAction } = setMedicineRemindersSlice.actions;

export default setMedicineRemindersSlice.reducer;
