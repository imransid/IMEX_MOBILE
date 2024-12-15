import {GET_SOCIAL, SOCIAL_FETCH, SOCIAL_ERROR} from '../constant/Constants';

const INITIAL_STATE = {
  socialLoader: true,
  socialData: [],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SOCIAL_FETCH:
      return {
        ...state,
        socialData: action.payload,
        socialLoader: false,
      };

    case GET_SOCIAL:
      return {
        ...state,
        socialLoader: true,
      };
    case SOCIAL_ERROR:
      return {
        ...state,
        socialLoader: false,
      };

    default:
      return state;
  }
};
