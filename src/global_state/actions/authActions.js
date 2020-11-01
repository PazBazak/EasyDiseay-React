import {LOGIN_SUCCESS} from "./types";

// Fetch all articles from API
export const loginUser = user => async dispatch => {
    await dispatch({type: LOGIN_SUCCESS, payload: user})
};

