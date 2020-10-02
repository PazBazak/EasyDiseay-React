import {SET_ARTICLES} from "../types";

export default (state, action) => {
    switch (action.type) {
        case SET_ARTICLES:
            return {
                ...state,
                articles: action.payload
            };
        default:
            return state;
    }
}

