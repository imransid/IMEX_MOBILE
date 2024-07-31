import { combineReducers } from '@reduxjs/toolkit';

import { defectsSlice } from './slices/features/Defect/slice';
import { defectListSlice } from './slices/features/DefectList/slice';
import endTableCheck from './slices/features/endTableCheck/slice';
import getTodaysHourWiseProductionBarSlice from './slices/features/getTodaysHourWiseProductionBar/slice';
import repairEndTableCheck from './slices/features/repairedEndTableCheck/slice';
import setLineStyleReducer from './slices/features/setLineStyle/slice';
import setting from './slices/features/setting/slice';
import usersReducer from './slices/features/users/slice';

const rootReducers = combineReducers({
  users: usersReducer,
  setLineStyle: setLineStyleReducer,
  graphData: getTodaysHourWiseProductionBarSlice,
  setting,
  defects: defectsSlice.reducer,
  defectList: defectListSlice.reducer,
  endTableCheck,
  repairEndTableCheck
});

export default rootReducers;
