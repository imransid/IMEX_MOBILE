import { combineReducers } from '@reduxjs/toolkit';

import { loginReducer } from './slices/Login/login.slice';
import { settingsReducer } from './slices/settings/slice';

const rootReducer = combineReducers({
  login: loginReducer,
  settings: settingsReducer,
  // createAccount: createAccountReducer,
  // medicineDetails: medicineDetailsReducer,
  // medicineDoses: medicneDosesReducer,
  // onceAdayDose: onceAdayDoseReducer,
  // twiceAdayDose: twiceAdayDoseReducer,
  // threeTimesAdayDose: threeTimesAdayDoseReducer,
  // fourTimesAdayDose: fourTimesAdayDoseReducer,
  // xTimesAdayDose: xTimesAdayDoseReducer,
  // everyXhoursDose: everyXhoursDoseReducer,
  // weekleyDose: weekleyDoseReducer,
  // monthlyDose: monthlyDoseReducer,
  // everyXdaysDose: everyXdaysDoseReducer,
  // everyXweeksDose: everyXweeksDoseReducer,
  // everyXmonthsDose: everyXmonthsDoseReducer
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
