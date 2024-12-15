import {API_SETUP_SUCCESS} from '../constant/Constants';

const INITIAL_STATE = {
  domainName: '',
  level: 0,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case API_SETUP_SUCCESS:
      return {
        domainName: action.payload,
        level: 1,
      };
    default:
      return state;
  }
};
