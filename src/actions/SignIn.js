import {SIGN_IN, SIGN_OUT, UPDATE_PROFILE} from '../constant/Constants';

export function LogIn(data, uri) {
  return {
    type: SIGN_IN,
    data: data,
    uri: uri,
  };
}

export function updateProfile(uri) {
  return {
    type: UPDATE_PROFILE,
    uri: uri,
  };
}

export function LogOut() {
  return {
    type: SIGN_OUT,
  };
}
