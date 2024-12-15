import {takeEvery} from 'redux-saga/effects';
import {
  SIGN_IN,
  CHECK_IN,
  CHECK_OUT,
  GET_ASSETS,
  BASIC_INFO,
  IMMIGRATION,
  GET_SOCIAL,
  API_SET_UP,
  CHECK_STATUS
} from '../constant/Constants';

import {_signIn, _signOut} from './sagaAction/SignIn';
import {_Attendance, _CheckInOutUpdate, _userStatusUpdate} from './sagaAction/Attendance';
import {_Assets} from './sagaAction/Assets.saga';
import {_Socials} from './sagaAction/Social.saga';
import {_BasicInfo} from './sagaAction/BasicInfo.saga';
import {_Immigration} from './sagaAction/Immigration.saga';
import {_ApiSetUp} from './sagaAction/ApiSetUP.saga';

const rootSaga = function* () {
  yield takeEvery(SIGN_IN, _signIn);
  yield takeEvery(CHECK_IN, _CheckInOutUpdate);
  yield takeEvery(CHECK_OUT, _CheckInOutUpdate);
  yield takeEvery(GET_ASSETS, _Assets);
  yield takeEvery(GET_SOCIAL, _Socials);
  yield takeEvery(BASIC_INFO, _BasicInfo);
  yield takeEvery(IMMIGRATION, _Immigration);
  yield takeEvery(API_SET_UP, _ApiSetUp);

  
};

export default rootSaga;
