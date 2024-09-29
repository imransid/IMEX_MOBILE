import { combineReducers } from '@reduxjs/toolkit';

import {
  createAccountReducer,
  everyXdaysDoseReducer,
  everyXhoursDoseReducer,
  everyXmonthsDoseReducer,
  everyXweeksDoseReducer,
  fourTimesAdayDoseReducer,
  medicineDetailsReducer,
  medicneDosesReducer,
  monthlyDoseReducer,
  onceAdayDoseReducer,
  settingsReducer,
  threeTimesAdayDoseReducer,
  twiceAdayDoseReducer,
  usersReducer,
  weekleyDoseReducer,
  xTimesAdayDoseReducer
} from '../store/slices/features/index';

const rootReducers = combineReducers({
  users: usersReducer,
  settings: settingsReducer,
  createAccount: createAccountReducer,
  medicineDetails: medicineDetailsReducer,
  medicineDoses: medicneDosesReducer,
  onceAdayDose: onceAdayDoseReducer,
  twiceAdayDose: twiceAdayDoseReducer,
  threeTimesAdayDose: threeTimesAdayDoseReducer,
  fourTimesAdayDose: fourTimesAdayDoseReducer,
  xTimesAdayDose: xTimesAdayDoseReducer,
  everyXhoursDose: everyXhoursDoseReducer,
  weekleyDose: weekleyDoseReducer,
  monthlyDose: monthlyDoseReducer,
  everyXdaysDose: everyXdaysDoseReducer,
  everyXweeksDose: everyXweeksDoseReducer,
  everyXmonthsDose: everyXmonthsDoseReducer
});

export default rootReducers;
