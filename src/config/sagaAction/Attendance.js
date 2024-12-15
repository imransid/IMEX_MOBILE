// https://hrmspvm.predictionla.com/api/user/daily-attendance
import {call, put, select} from 'redux-saga/effects';
import axios from 'axios';
import {
  SIGH_IN_ERROR,
  CHECK_OUT_SUCCESSFULLY,
  CHECK_IN_SUCCESSFULLY,
} from '../../constant/Constants';
import NetInfo from '@react-native-community/netinfo';

import {View, StyleSheet, ToastAndroid, Button, StatusBar} from 'react-native';

export const _Attendance = function* (action) {
  try {
    const State = yield select();

    const uri = 'https://hrmspvm.predictionla.com/api/user/daily-attendance'; //State.api + '/authentication';

    let data = {
      employee_id: State.user.userAllData.id, //action.data.username,
      uri: uri,
    };

    const apiStatus = yield call(_ApiCall, data);

    if (apiStatus.status) {
      //   yield put({
      //     type: SIGH_IN_SUCCESSFULLY,
      //     payload: {
      //       username: authStatus.username,
      //       token: authStatus.token,
      //       expireTime: authStatus.expireTime,
      //       userAllData: authStatus.userAllData,
      //     },
      //   });
    } else {
      //   yield put({
      //     type: SIGH_IN_ERROR,
      //     payload: {
      //       msg: authStatus.msg,
      //     },
      //   });
    }
  } catch (err) {
    console.log('Error in  _signIn ', err);
  }
};


export const _CheckInOutUpdate = function* (action) {
  try {
    const State = yield select();

    const uri =
      action.status === 'check out'
        ? `${State.api.domainName}attendance-check-out`
        : `${State.api.domainName}attendance-check-in`;

    const NetStatus = yield NetInfo.fetch().then(state => state.isConnected);

    let IP;
    NetStatus ? (IP = yield call(_GetIp)) : (IP = '127.0.0.1');

    let data = {
      com_id: State.user.userAllData.com_id.toString(), //action.data.username,
      employee_id: State.user.userAllData.id.toString(),
      lat: State.user.Latitude,
      longt: State.user.Longitude, //action.data.username,
      office_shift_id: State.user.userAllData.office_shift_id.toString(),
      user_over_time_type: State.user.userAllData.user_over_time_type,
      over_time_payable: State.user.userAllData.over_time_payable,
      user_over_time_rate:
        State.user.userAllData.user_over_time_rate.toString(),
      ip_address: IP,
      uri: uri,
      token: State.user.token,
    };

    const checkInStatus = yield call(_ApiCall, data);

    console.log('checkInStatus', checkInStatus);

    if (checkInStatus) {
      action.status === 'check out'
        ? yield put({
            type: CHECK_OUT_SUCCESSFULLY,
            payload:"Present",
          })
        : yield put({
            type: CHECK_IN_SUCCESSFULLY,
            payload: "Present",
          });



    } else {
      yield put({
        type: CHECK_IN_ERROR,
      });
    }
  } catch (err) {
    console.log('Error in _CheckIN', err);
  }
};

const _ApiCall = function* (action) {
  try {
    var myHeaders = new Headers();
    myHeaders.append('Cookie', 'XSRF-TOKEN=' + action.token);

    var formdata = new FormData();

    formdata.append('com_id', action.com_id);
    formdata.append('employee_id', action.employee_id);
    formdata.append('lat', action.lat);
    formdata.append('longt', action.longt);
    formdata.append('office_shift_id', action.office_shift_id);
    formdata.append('user_over_time_type', action.user_over_time_type);
    formdata.append('over_time_payable', action.over_time_payable);
    formdata.append('user_over_time_rate', action.user_over_time_rate);
    formdata.append('ip_address', action.ip_address);

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: formdata,
      redirect: 'follow',
    };

    return yield fetch(action.uri, requestOptions)
      .then(response => response.json())
      .then(result => {

        if(result.success){
           if (result.message !== undefined) {
          ToastAndroid.showWithGravityAndOffset(
            result.message,
            ToastAndroid.LONG,
            ToastAndroid.BOTTOM,
            25,
            50,
          );
        }
        return true;

        }else{

           if (result.message !== undefined) {
          ToastAndroid.showWithGravityAndOffset(
            result.message,
            ToastAndroid.LONG,
            ToastAndroid.BOTTOM,
            25,
            50,
          );
        }
        return false;

        }
     
      })
      .catch(error => {
        return false;
      });

    //   var formdata = new FormData();

    //   formdata.append(
    //     'Cookie',
    //     'XSRF-TOKEN=eyJpdiI6IlhTSHhLZEV5aTlVcnFEUUZaWEYwY2c9PSIsInZhbHVlIjoiSkQrVFROWnQwWGZ4Nm04b0plbm1nUDhyZ0ozb3RycVQ2SHVUck9OQmVzdmdxT09Fd3Q2MWZiSDZPQytqVnJLY2gxYWprd3pqVjVTcGVjYWZFZC9HMFdzSVRFYmIrUkQ3WHNLMW54UXVzNW9BeVZuNDJhK0FCdU5ZZ1A5enVKNnEiLCJtYWMiOiI1MTE4ZjYwZTc2MjAxNmJjYWUxZTk2MTQ2MGYyMTVkMGU5ZGU2YTU4Y2ViMjRjMGJhNDhkNzNjNGViZjdkZDFjIiwidGFnIjoiIn0%3D; predictionit_session=eyJpdiI6InBlT2RWOFJhNlpOZGVWanhZbnlsU0E9PSIsInZhbHVlIjoiNUZRUlFLZ0xPaHZ6V1lWbFBCNnduSHhYcVI3R0I0WlZ5Y0ZDdnllbWtGZDYwbWQ1di8yOVUvTnp3WGhOa1hlRkViQVNiNmIydC9WZ0pnNmdyRVVRemZQZmR0UVoyTjdQRTlNSkc5VGVDSjNwVUdUTEFnRHpBV2p1WmFhSXRkMG8iLCJtYWMiOiJmMjJiYWYxMTI3MTU1MTAwNDNiYWU0NWI2MjVhM2IyOWYwMmY4ODY2YWNkMTQ1ZTk2OTYxNzcwMzU4NmEyY2VmIiwidGFnIjoiIn0%3D',
    //   );
    //   formdata.append('com_id', action.com_id);
    //   formdata.append('employee_id', action.employee_id);
    //   formdata.append('lat', action.lat);
    //   formdata.append('longt', action.longt);
    //   formdata.append('office_shift_id', action.office_shift_id);
    //   formdata.append('user_over_time_type', action.user_over_time_type);
    //   formdata.append('over_time_payable', action.over_time_payable);
    //   formdata.append('user_over_time_rate', action.user_over_time_rate);
    //   formdata.append('ip_address', action.ip_address);

    //   console.log('formdata', formdata, action);

    //   var requestOptions = {
    //     method: 'POST',
    //     body: formdata,
    //     redirect: 'follow',
    //   };

    //   return yield fetch(action.uri, requestOptions)
    //     .then(response => response.text())
    //     .then(result => {
    //       console.log('rs', result);
    //       return true;
    //     })
    //     .catch(error => false);
  } catch (err) {
    console.log('Error in  _authApiCall ', err);
  }
};

const _GetIp = function* (action) {
  try {
    return yield axios
      .get('https://api.ipify.org?format=jsonp?callback=?')
      .then(function (res) {
        return res.data;
      })
      .catch(() => '');
  } catch (err) {
    console.log('Error in _GetIp ', err);
  }
};
