import { createSlice } from '@reduxjs/toolkit';

import { SET_DOCTOR_APPOINTMENT } from './constants';
import { type ISetDoctorAppointmentType } from './types';

const SetDoctorAppointmentInitialData: ISetDoctorAppointmentType = {
  date: '',
  time: '',
  doctorName: '',
  location: '',
  reminder: ''
};

export const setDoctorAppointmentSlice = createSlice({
  name: SET_DOCTOR_APPOINTMENT,
  initialState: SetDoctorAppointmentInitialData,
  reducers: {
    getSetDoctorAppointmentAction: (state: ISetDoctorAppointmentType) => {
      state.date = '';
      state.time = '';
      state.doctorName = '';
    }
  }
});

export const { getSetDoctorAppointmentAction } = setDoctorAppointmentSlice.actions;

export default setDoctorAppointmentSlice.reducer;
