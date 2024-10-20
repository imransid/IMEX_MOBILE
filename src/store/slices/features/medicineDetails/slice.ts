import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

import { MEDICINE_DETAILS } from './constants';
import {
  type doseQuantityStatus,
  type doseTimeStatus,
  type IMedicine,
  type IMedicineDetailsType,
  type IWeekly,
  type IWeeklyDoseTime,
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
  storedMedicineWeeklyList: [],
  weeklyTime: [],
  timeInterval: '',
  weeklyDoseTime: []
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
      state.storedMedicineWeeklyList = [
        ...state.storedMedicineWeeklyList,
        payload.payload.IStoredWeekly
      ];
    },
    setWeeklyDoseTime: (state: IMedicineDetailsType, payload: PayloadAction<IWeeklyDoseTime[]>) => {
      // let data = [...state.weeklyDoseTime, ...payload.payload];
      // state.weeklyDoseTime = data;

      const existingEntries = new Map<string, IWeeklyDoseTime>();

      // Populate the map with current weekly doses
      state.weeklyDoseTime.forEach(entry => {
        const key = `${entry.medicineLocalId}-${entry.doseTime}`;
        existingEntries.set(key, entry);
      });

      // Iterate through the new payload and either update or add entries
      payload.payload.forEach(newEntry => {
        const key = `${newEntry.medicineLocalId}-${newEntry.doseTime}`;

        if (existingEntries.has(key)) {
          // Update the existing entry's doseQuantity
          const existingEntry = existingEntries.get(key);
          existingEntry.doseQuantity = newEntry.doseQuantity; // Update the quantity
        } else {
          // If it doesn't exist, add the new entry
          existingEntries.set(key, newEntry);
        }
      });

      // Convert the map back to an array
      state.weeklyDoseTime = Array.from(existingEntries.values());
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
  setWeekly,
  setWeeklyDoseTime
} = medicineDetailsSlice.actions;

export const medicineDetailsReducer = medicineDetailsSlice.reducer;
