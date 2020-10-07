import {SET_DARK_THEME} from "../types";

export default (state, action) => {
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

