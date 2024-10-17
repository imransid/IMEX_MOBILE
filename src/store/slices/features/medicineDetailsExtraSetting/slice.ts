import { createSlice } from '@reduxjs/toolkit';

import { MEDICINE_DETAILS_EXTRA_SETTING } from './constants';
import { type IMedicineDetailsExtraSettingType } from './types';

const medicineDetailsExtraSettingData: IMedicineDetailsExtraSettingType = {
  instrucTion: '',
  medicineTakeEachDay: '',
  treatmentDurationStartTime: '',
  treatmentDurationEndTime: '',
  medicineReminderTotalReq: '',
  medicineReminderCurrentStock: '',
  medicineReminderRemindToLeft: '',
};

export const medicineDetailsExtraSettingSlice = createSlice({
  name: MEDICINE_DETAILS_EXTRA_SETTING,
  initialState: medicineDetailsExtraSettingData,
  reducers: {
    getMedicineDetailsExtraSettingAction: (state: IMedicineDetailsExtraSettingType) => {
      state.instrucTion = '';
      state.medicineTakeEachDay = '';
      state.treatmentDurationStartTime = '';
      state.treatmentDurationEndTime = '';
      state.medicineReminderTotalReq = '';
      state.medicineReminderCurrentStock = '';
      state.medicineReminderRemindToLeft = '';
    }
  }
});

export const { getMedicineDetailsExtraSettingAction } = medicineDetailsExtraSettingSlice.actions;

export const medicineDetailsExtraSettingReducer = medicineDetailsExtraSettingSlice.reducer;
