import {
    SET_HEADER_POSITION_MODE,
    SET_HEADER_IS_DISEASE_MENU_SHOWN,
} from "../actions/types";

const initialState = {
    headerPositionMode: 'fixed',
    isDiseaseMenuShown: false,
};

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_HEADER_POSITION_MODE:
            return {
                ...state,
                headerPositionMode: action.payload
            };
        case SET_HEADER_IS_DISEASE_MENU_SHOWN:
            return {
                ...state,
                isDiseaseMenuShown: action.payload
            };
        default:
            return state;
    }
}

