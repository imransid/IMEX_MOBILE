import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

import { APPOINTMENT } from './constants';
import { type IAppointmentType } from './types';

const appointmentInitialData: IAppointmentType = {
  date: '',
  time: '',
  doctorName: '',
  location: '',
  setReminder: ''
};

export const appointmentSlice = createSlice({
  name: APPOINTMENT,
  initialState: appointmentInitialData,
  reducers: {
    getAppointmentAction: (state: IAppointmentType) => {
      state.date = '';
      state.time = '';
      state.doctorName = '';
      state.location = '';
      state.setReminder = '';
    },
    setAppointment: (state: IAppointmentType, payload: PayloadAction<IAppointmentType>) => {
      state.date = payload.payload.date;
      state.time = payload.payload.time;
      state.doctorName = payload.payload.doctorName;
      state.location = payload.payload.location;
      state.setReminder = payload.payload.setReminder;
    }
  }
});

export const { getAppointmentAction, setAppointment } = appointmentSlice.actions;

export const appointmentReducer = appointmentSlice.reducer;
