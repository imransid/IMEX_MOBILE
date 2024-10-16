import { createSlice } from '@reduxjs/toolkit';

import { SET_TREATMENT_DURATION } from './constants';
import { type ISetTreatmentDurationType } from './types';

const SetTreatmentDurationInitialData: ISetTreatmentDurationType = {
  startDate: '',
  endDate: '',
  numOfMedicines: ''
};

export const SetTreatmentDurationSlice = createSlice({
  name: SET_TREATMENT_DURATION,
  initialState: SetTreatmentDurationInitialData,
  reducers: {
    getSetTreatmentDurationAction: (state: ISetTreatmentDurationType) => {
      state.startDate = '';
      state.endDate = '';
      state.numOfMedicines = '';
    }
  }
});

export const { getSetTreatmentDurationAction } = SetTreatmentDurationSlice.actions;

export default SetTreatmentDurationSlice.reducer;
