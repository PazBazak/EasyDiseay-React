import {SET_HEADER_POSITION_MODE} from "./types";

export const setHeaderPosAsStatic = () => dispatch => {
    dispatch({type: SET_HEADER_POSITION_MODE, payload: 'static'});
};

export const setHeaderPosAsFixed = () => dispatch => {
    dispatch({type: SET_HEADER_POSITION_MODE, payload: 'fixed'});
};
