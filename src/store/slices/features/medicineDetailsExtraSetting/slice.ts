import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

import { MEDICINE_DETAILS_EXTRA_SETTING } from './constants';
import {
  type IMedicineDetailsExtraSettingType,
  type IMedicineReminder,
  type InstrucTion,
  type ITreatmentDuration
} from './types';

const medicineDetailsExtraSettingData: IMedicineDetailsExtraSettingType = {
  storeInstrucTionList: [],
  storeTreatmentDuration: [],
  storeMedicineReminder: []
};

export const medicineDetailsExtraSettingSlice = createSlice({
  name: MEDICINE_DETAILS_EXTRA_SETTING,
  initialState: medicineDetailsExtraSettingData,
  reducers: {
    setExtraInstrucTion: (
      state: IMedicineDetailsExtraSettingType,
      payload: PayloadAction<InstrucTion[]>
    ) => {
      state.storeInstrucTionList = [...state.storeInstrucTionList, ...payload.payload];
    },
    setExtraTreatmentDuration: (
      state: IMedicineDetailsExtraSettingType,
      payload: PayloadAction<ITreatmentDuration[]>
    ) => {
      state.storeTreatmentDuration = [...state.storeTreatmentDuration, ...payload.payload];
    },
    setExtraMedicineReminder: (
      state: IMedicineDetailsExtraSettingType,
      payload: PayloadAction<IMedicineReminder[]>
    ) => {
      state.storeMedicineReminder = [...state.storeMedicineReminder, ...payload.payload];
    },
    clearExtraMedicineDetails: (state: IMedicineDetailsExtraSettingType) => {
      state.storeInstrucTionList = [];
      state.storeMedicineReminder = [];
      state.storeTreatmentDuration = [];
    }
  }
});

export const {
  setExtraInstrucTion,
  setExtraTreatmentDuration,
  setExtraMedicineReminder,
  clearExtraMedicineDetails
} = medicineDetailsExtraSettingSlice.actions;

export const medicineDetailsExtraSettingReducer = medicineDetailsExtraSettingSlice.reducer;
