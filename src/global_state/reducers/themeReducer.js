import {SET_DARK_THEME} from "../actions/types";

const initialState = {
    isDark: false,
};

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_DARK_THEME:
            return {
                ...state,
                isDark: action.payload
            };
        default:
            return state;
    }
}

