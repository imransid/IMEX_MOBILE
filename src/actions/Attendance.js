import {CHECK_OUT, CHECK_IN, SET_LOCATION, CHECK_STATUS} from '../constant/Constants';

export function CheckIn(extradata) {
  return {
    type: CHECK_IN,
    status: 'check in',
    extradata: extradata
  };
}

export function CheckStatus(status) {
  return {
    type: CHECK_STATUS,
    status: status,
  };
}

export function CheckOut(extradata) {
  return {
    type: CHECK_OUT,
    status: 'check out',
    extradata: extradata
  };
}

export function setLocation(long, lat) {
  return {
    type: SET_LOCATION,
    long: long,
    lat: lat,
  };
}
