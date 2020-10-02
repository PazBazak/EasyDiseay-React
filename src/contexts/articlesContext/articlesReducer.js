import {GET_ALL_ARTICLES, SET_ARTICLES} from "../types";

export default (state, action) => {
    switch (action.type) {
        case SET_ARTICLES:
            return {
                ...state,
                articles: action.payload
            };
        case GET_ALL_ARTICLES:
            return {
                ...state,
                articles: action.payload
            };
        default:
            return state;
    }
}

