import { combineReducers } from '@reduxjs/toolkit';

import { settingsReducer, usersReducer } from '../store/slices/features/index';

const rootReducers = combineReducers({
  users: usersReducer,
  settings: settingsReducer
});

export default rootReducers;
