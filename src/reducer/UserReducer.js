import {
  SIGH_IN_ERROR,
  SIGH_IN_SUCCESSFULLY,
  SIGN_IN,
  SIGN_OUT,
  SET_LOCATION,
  CHECK_IN,
  CHECK_IN_SUCCESSFULLY,
  CHECK_IN_ERROR,
  CHECK_OUT_SUCCESSFULLY,
  CHECK_OUT,
  UPDATE_PROFILE,
  CHECK_STATUS
} from '../constant/Constants';

const INITIAL_STATE = {
  errorMsg: '',
  username: null,
  token: null,
  expireTime: '',
  userAllData: {},
  loader: false,
  islogged: false,
  Longitude: '',
  Latitude: '',
  checkInStatus: null,
  checkInLoader: false,
  profilePic: '',
  userCurentStatus: null
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SIGN_IN:
      return {
        ...state,
        loader: true,
      };
    
    case CHECK_STATUS:
       return { 
         ...state,
        checkInStatus: action.status
       }
    case SIGN_OUT:
      return {
        ...state,
        loader: false,
        username: '',
        token: '',
        expireTime: '',
        userAllData: {},
        errorMsg: '',
        islogged: false,
        Longitude: '',
        Latitude: '',
      };
    case UPDATE_PROFILE:
      return {
        ...state,
        profilePic: action.uri,
      };

    case SIGH_IN_SUCCESSFULLY:
      return {
        ...state,
        loader: false,
        username: action.payload.username,
        token: action.payload.token,
        expireTime: action.payload.expireTime,
        userAllData: action.payload.userAllData,
        errorMsg: '',
        islogged: true,
      };
    case SIGH_IN_ERROR:
      return {
        ...state,
        loader: false,
        errorMsg: action.payload.errorMsg,
        islogged: false,
      };
    case SET_LOCATION:
      return {
        ...state,
        Latitude: action.lat,
        Longitude: action.long,
      };
    case CHECK_IN_ERROR:
      return {
        ...state,
        checkInLoader: false,
      };
    case CHECK_IN_SUCCESSFULLY:
      return {
        ...state,
        checkInStatus: action.payload,
        checkInLoader: false,
      };
    case CHECK_OUT_SUCCESSFULLY:
      return {
        ...state,
        checkInStatus: action.payload,
        checkInLoader: false,
      };
    case CHECK_IN:
      return {
        ...state,
        checkInLoader: true,
      };
    case CHECK_OUT:
      return {
        ...state,
        checkInLoader: true,
      };
    default:
      return state;
  }
};
