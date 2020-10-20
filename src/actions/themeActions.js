import {SET_DARK_THEME} from "./types";

export const setIsDark = value => async dispatch => {
    await dispatch({type: SET_DARK_THEME, payload: value});
};
