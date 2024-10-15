import { all, fork } from 'redux-saga/effects';

import watchGetUser from './saga';
import createSagaMiddleware from 'redux-saga';

import { loginWatcherSaga } from './slices/Login/login.saga';
import { logoutWatcherSaga } from './slices/Login/logout.saga';

export const rootSagaMiddleware = createSagaMiddleware();

const rootSaga = function* (): Generator {
  yield all([
    loginWatcherSaga(),
    logoutWatcherSaga()
  ]);
};

export default rootSaga;
