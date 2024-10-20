import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

import { MEDICINE_DETAILS } from './constants';
import {
  type doseQuantityStatus,
  type doseTimeStatus,
  type IMedicine,
  type IMedicineDetailsType,
  type IWeekly,
  type MedicineName,
  type MedicStatus,
  type MedicType,
  type StrengthUnit,
  type TakeStatus
} from './types';

const medicineDetailsInitialData: IMedicineDetailsType = {
  medicineLocalId: '',
  medicineName: '',
  medicineStatus: '',
  takeStatus: '',
  doseQuantity: '',
  doseTime: '',
  strengthMed: '',
  unitMed: '',
  typeMed: '',
  storedMedicineList: [],
  weeklyTime: [],
  timeInterval: ''
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
    },
    setMedicineName: (state: IMedicineDetailsType, payload: PayloadAction<MedicineName>) => {
      state.medicineLocalId = `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
      state.medicineName = payload.payload.medicineName;
    },
    setStrengthUnit: (state: IMedicineDetailsType, payload: PayloadAction<StrengthUnit>) => {
      state.strengthMed = payload.payload.strengthMed;
      state.unitMed = payload.payload.unitMed;
    },
    setMedicineType: (state: IMedicineDetailsType, payload: PayloadAction<MedicType>) => {
      state.typeMed = payload.payload.typeMed;
    },
    setMedicineStatus: (state: IMedicineDetailsType, payload: PayloadAction<MedicStatus>) => {
      state.medicineStatus = payload.payload.medicineStatus;
    },
    setTakeStatus: (state: IMedicineDetailsType, payload: PayloadAction<TakeStatus>) => {
      state.takeStatus = payload.payload.takeStatus;
    },
    setDoseTime: (state: IMedicineDetailsType, payload: PayloadAction<doseTimeStatus>) => {
      state.doseTime = payload.payload.doseTime;
    },
    setDoseQuantity: (state: IMedicineDetailsType, payload: PayloadAction<doseQuantityStatus>) => {
      state.doseQuantity = payload.payload.doseQuantity;
    },
    setDoseList: (state: IMedicineDetailsType, payload: PayloadAction<IMedicine[]>) => {
      state.storedMedicineList = payload.payload;
    },
    setWeekly: (state: IMedicineDetailsType, payload: PayloadAction<IWeekly>) => {
      state.weeklyTime = payload.payload.weeklyTime;
      state.timeInterval = payload.payload.timeInterval;
    }
  }
});

export const {
  getMedicineDetailsAction,
  setMedicineName,
  setStrengthUnit,
  setMedicineType,
  setMedicineStatus,
  setTakeStatus,
  setDoseTime,
  setDoseQuantity,
  setDoseList,
  setWeekly
} = medicineDetailsSlice.actions;

export const medicineDetailsReducer = medicineDetailsSlice.reducer;
