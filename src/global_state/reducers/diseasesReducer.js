import {SET_DISEASES} from "../actions/types";

const initialState = {
    diseases: []
};

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_DISEASES:
            return {
                ...state,
                diseases: action.payload
            };
        default:
            return state;
    }
}

