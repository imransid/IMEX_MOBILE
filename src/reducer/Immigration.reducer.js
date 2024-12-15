import { IMMIGRATION, IMMIGRATION_ERROR, IMMIGRATION_FETCH } from '../constant/Constants';

const INITIAL_STATE = {
    immigrationLoader: true,
    immigrationData: [],
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case IMMIGRATION_FETCH:
            return {
                ...state,
                immigrationData: action.payload,
                immigrationLoader: false,
            };

        case IMMIGRATION:
            return {
                ...state,
                immigrationLoader: true,
            };
        case IMMIGRATION_ERROR:
            return {
                ...state,
                immigrationLoader: false,
            };

        default:
            return state;
    }
};
