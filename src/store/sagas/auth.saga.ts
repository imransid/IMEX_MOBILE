import { put } from 'redux-saga/effects';
import * as Effects from 'redux-saga/effects';

// import { setLineSlice } from '../slices/features/setLineProcess/slice';
import { BASE_URL, FINISHING_ORG, FINISHING_PROCESS_LIST } from '@/utils/environment';
import ToastPopUp from '@/utils/Toast.android';

import { commonGetAPI, loginAPI } from '../../store/sagas/helper/api.saga';
// import { settingSlice, stopLoader } from '../slices/features/settings/slice';
import { usersSlice } from '../slices/features/users/slice';
import { type AccessTokenInfo } from '../types/types';

const { call } = Effects;
interface IGetUserActionPayload {
  payload: {
    mobile: string;
    password: string;
  };
  type: string;
}

export function* loginSaga(
  payload: IGetUserActionPayload
): Generator<any, void, AccessTokenInfo | undefined | any> {
  try {
    // yield put(settingSlice.actions.setGlobalLoaderAction({ status: true }));

    const response: any = yield call(loginAPI, payload.payload);

    if (response !== undefined) {
      // yield put(settingSlice.actions.setGlobalLoaderAction({ status: false }));
      // update org tree
      yield put(usersSlice.actions.getUserSuccessAction(response.data));

      const props = {
        url: BASE_URL + '/' + FINISHING_PROCESS_LIST,
        token: response.data.accessToken
      };

      // const responseSetLineProcess: any = yield call(commonGetAPI, props);

      props.url = BASE_URL + '/' + FINISHING_ORG;

      const responseFinishProcessList: any = yield call(commonGetAPI, props);

      // if (responseSetLineProcess !== undefined) {
      //   const modFinishData = responseSetLineProcess.data.map((e: any) => {
      //     e.label = e.name;
      //     e.value = e.id;
      //     return e;
      //   });

      //   // yield put(setLineSlice.actions.setFinishOrg(modFinishData));
      // }

      // for process List
      if (responseFinishProcessList !== undefined) {
        // const modFinishData = responseFinishProcessList.data.map((e: any) => {
        //   e.label = e.name;
        //   e.value = e.id;
        //   return e;
        // });
        // yield put(setLineSlice.actions.setProcessList(modFinishData));
      }
    } else {
      // case undefined
      const data = 'Cridentials did not match. Please try again.';
      ToastPopUp(data);
      // yield put(stopLoader());
      yield put(usersSlice.actions.getUserErrorAction('Login failed')); // Handle error case
    }
  } catch (error) {
    console.error(error);
  }
}

export function* loaderChecker(): Generator<any, void, AccessTokenInfo | undefined | any> {
  try {
    // const isLoading = yield select((state: RootState) => state.settings.isLoading);
    // if (isLoading) yield put(stopLoader());
    yield;
  } catch (error) {
    console.error(error);
  }
}
