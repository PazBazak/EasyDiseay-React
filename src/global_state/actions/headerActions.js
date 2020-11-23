import {
    SET_HEADER_POSITION_MODE,
    SET_HEADER_IS_DISEASE_MENU_SHOWN
} from "./types";

export const setHeaderPosAsStatic = () => dispatch => {
    dispatch({type: SET_HEADER_POSITION_MODE, payload: 'static'});
};

export const setHeaderPosAsFixed = () => dispatch => {
    dispatch({type: SET_HEADER_POSITION_MODE, payload: 'fixed'});
};

export const setIsDiseaseMenuShown = (isShown) => dispatch => {
    dispatch({type: SET_HEADER_IS_DISEASE_MENU_SHOWN, payload: isShown});
};