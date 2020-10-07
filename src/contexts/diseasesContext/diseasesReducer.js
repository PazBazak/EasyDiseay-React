import {SET_DISEASES} from "../types";

export default (state, action) => {
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

