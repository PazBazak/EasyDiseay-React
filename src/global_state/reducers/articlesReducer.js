import {SET_ARTICLES} from "../actions/types";

const initialState = {
    articles: []
};

export default (state = initialState, action) => {
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

