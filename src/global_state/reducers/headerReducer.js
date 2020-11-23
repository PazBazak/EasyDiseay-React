import {SET_HEADER_POSITION_MODE} from "../actions/types";

const initialState = {
    headerPositionMode: 'fixed',
};

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_HEADER_POSITION_MODE:
            return {
                ...state,
                headerPositionMode: action.payload
            };
        default:
            return state;
    }
}

