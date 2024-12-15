import {call, put, select} from 'redux-saga/effects';
import axios from 'axios';
import {SIGH_IN_ERROR, SIGH_IN_SUCCESSFULLY} from '../../constant/Constants';
const _authApiCall = function* (action) {
  try {
    const uri = action.uri;

    var formdata = new FormData();
    formdata.append('emailPhone', action.username); //action.username
    formdata.append('password', action.password); //action.password

    var requestOptions = {
      method: 'POST',
      body: formdata,
      redirect: 'follow',
    };

    return yield fetch(action.uri.toString(), requestOptions)
      .then(response => response.json())
      .then(response => {
        let res = {
          status: true,
          token: response.access_token,
          username: response.user.first_name,
          expireTime: response.expires_in,
          userAllData: response.user,
        };

        return res;
      })
      .catch(error => {
        console.log('error in ', error);
        let res = {
          status: false,
          msg: error.msg,
          token: '',
          username: '',
          expireTime: '',
          userAllData: {},
        };

        return res;
      });

    // return yield axios
    //   .post(uri, {
    //     emailPhone: action.username,
    //     password: action.password,
    //   })
    //   .then(function (response) {
    //     let res = {
    //       status: true,
    //       token: response.data.access_token,
    //       username: response.data.user.first_name,
    //       expireTime: response.data.expires_in,
    //       userAllData: response.data.user,
    //     };

    //     return res;
    //   })
    //   .catch(function (error) {
    //     console.log('error', error);
    //     let res = {
    //       status: false,
    //       msg: error.msg,
    //       token: '',
    //       username: '',
    //       expireTime: '',
    //       userAllData: {},
    //     };

    //     return res;
    //   });
  } catch (err) {
    console.log('Error in  _authApiCall ', err);
  }
};

// for login
export const _signIn = function* (action) {
  try {
    const State = yield select();

    const uri = action.uri + 'login'; //State.api + '/authentication';

    let data = {
      username: action.data.userName,
      password: action.data.password,
      uri: uri,
    };

    const authStatus = yield call(_authApiCall, data);

    if (authStatus.status) {
      yield put({
        type: SIGH_IN_SUCCESSFULLY,
        payload: {
          username: authStatus.username,
          token: authStatus.token,
          expireTime: authStatus.expireTime,
          userAllData: authStatus.userAllData,
        },
      });
    } else {
      yield put({
        type: SIGH_IN_ERROR,
        payload: {
          msg: authStatus.msg,
        },
      });
    }
  } catch (err) {
    console.log('Error in  _signIn ', err);
  }
};
