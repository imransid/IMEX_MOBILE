import {takeEvery, put} from 'redux-saga/effects';
import {API_SETUP_SUCCESS} from '../../constant/Constants';

export const _ApiSetUp = function* (action) {
  try {
    let uri =
      action.payload.value.slice(action.payload.value.length - 1) === '/'
        ? action.payload.value.slice(0, -1)
        : action.payload.value;

    uri = uri + '/api/user/';

    yield put({
      type: API_SETUP_SUCCESS,
      payload: uri,
    });
  } catch (err) {
    console.log('Error in _ApiSetUp ', err);
  }
};
