import {GET_ASSETS, ASSET_FETCH, ASSET_ERROR} from '../constant/Constants';

const INITIAL_STATE = {
  assetLoader: true,
  assetData: [],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ASSET_FETCH:
      return {
        ...state,
        assetData: action.payload,
        assetLoader: false,
      };

    case GET_ASSETS:
      return {
        ...state,
        assetLoader: true,
      };
    case ASSET_ERROR:
      return {
        ...state,
        assetLoader: false,
      };

    default:
      return state;
  }
};
