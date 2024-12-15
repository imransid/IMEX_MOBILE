import {DRAWER_CHANGE} from '../constant/Constants';

const INITIAL_STATE = {
  drawerMode: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case DRAWER_CHANGE:
      return {
        ...state,
        drawerMode: action.payload,
      };

    default:
      return state;
  }
};
