import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

import { MEDICINE_DETAILS_EXTRA_SETTING } from './constants';
import {
  type IMedicineDetailsExtraSettingType,
  type IMedicineReminder,
  type InstrucTion,
  type ITreatmentDuration
} from './types';

const medicineDetailsExtraSettingData: IMedicineDetailsExtraSettingType = {
  instrucTion: '',
  medicineTakeEachDay: '',
  treatmentDurationStartTime: '',
  treatmentDurationEndTime: '',
  medicineReminderTotalReq: '',
  medicineReminderCurrentStock: '',
  medicineReminderRemindToLeft: ''
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
    },
    setExtraInstrucTion: (
      state: IMedicineDetailsExtraSettingType,
      payload: PayloadAction<InstrucTion>
    ) => {
      state.instrucTion = payload.payload.instrucTion;
    },
    setExtraTreatmentDuration: (
      state: IMedicineDetailsExtraSettingType,
      payload: PayloadAction<ITreatmentDuration>
    ) => {
      state.treatmentDurationStartTime = payload.payload.treatmentDurationStartTime;
      state.treatmentDurationEndTime = payload.payload.treatmentDurationEndTime;
      state.medicineTakeEachDay = payload.payload.medicineTakeEachDay;
    },
    setExtraMedicineReminder: (
      state: IMedicineDetailsExtraSettingType,
      payload: PayloadAction<IMedicineReminder>
    ) => {
      state.treatmentDurationStartTime = payload.payload.medicineReminderCurrentStock;
      state.treatmentDurationEndTime = payload.payload.medicineReminderTotalReq;
      state.medicineTakeEachDay = payload.payload.medicineReminderRemindToLeft;
    }
  }
});

export const {
  getMedicineDetailsExtraSettingAction,
  setExtraInstrucTion,
  setExtraTreatmentDuration,
  setExtraMedicineReminder
} = medicineDetailsExtraSettingSlice.actions;

export const medicineDetailsExtraSettingReducer = medicineDetailsExtraSettingSlice.reducer;
