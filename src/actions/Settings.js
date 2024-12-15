import {DRAWER_CHANGE, API_SET_UP} from '../constant/Constants';

export function DrawerChange(data) {
  return {
    type: DRAWER_CHANGE,
    payload: data,
  };
}

export function setDomainName(data) {
  return {
    type: API_SET_UP,
    payload: data,
  };
}
