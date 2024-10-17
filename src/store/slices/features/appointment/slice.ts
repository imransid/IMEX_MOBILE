import { createSlice } from '@reduxjs/toolkit';

import { APPOINTMENT } from './constants';
import { type IAppointmentType } from './types';

const appointmentInitialData: IAppointmentType = {
  date: '',
  time: '',
  doctorName: '',
  location: '',
  setReminder: '',
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
    }
  }
});

export const { getAppointmentAction } = appointmentSlice.actions;

export const appointmentReducer = appointmentSlice.reducer;
