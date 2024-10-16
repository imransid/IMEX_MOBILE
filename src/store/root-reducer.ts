import { combineReducers } from '@reduxjs/toolkit';

import { loginReducer } from './slices/Login/login.slice';
import { settingsReducer } from './slices/settings/slice';

const rootReducer = combineReducers({
  login: loginReducer,
  settings: settingsReducer
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
