import {call, put, select} from 'redux-saga/effects';

import {BASIC_INFO_FETCH, BASIC_INFO_ERROR} from '../../constant/Constants';

export const _BasicInfo = function* (action) {
  try {
    const uri = 'https://hrmspvm.predictionla.com/api/user/basic-information';

    let data = {
      social_profile_employee_id: action.social_profile_employee_id,
      uri: uri,
    };

    const apiStatus = yield call(_ApiCall, data);

    if (apiStatus.status) {
      yield put({
        type: BASIC_INFO_FETCH,
        payload: apiStatus.data,
      });
    } else {
      yield put({
        type: BASIC_INFO_ERROR,
        payload: {
          msg: authStatus.msg,
        },
      });
    }
  } catch (err) {
    console.log('Error Getting Data ', err);
  }
};

const _ApiCall = function* (action) {
  try {
    var formdata = new FormData();
    formdata.append(
      'social_profile_employee_id',
      action.social_profile_employee_id,
    );

    var requestOptions = {
      method: 'POST',
      body: formdata,
      redirect: 'follow',
    };

    return yield fetch(action.uri, requestOptions)
      .then(response => response.json())
      .then(result => {
        let res = {
          status: true,
          data: result.data,
          msg: '',
        };
        return res;
      })
      .catch(error => {
        let res = {
          status: false,
          data: [],
          msg: error,
        };
        return res;
      });
  } catch (err) {
    console.log('Error in  _authApiCall ', err);
  }
};
