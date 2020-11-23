import {SET_TEAM_DETAILS} from "../actions/types";

const initialState = {
    teamDetails: [],
};

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_TEAM_DETAILS:
            return {
                ...state,
                teamDetails: action.payload
            };
        default:
            return state;
    }
}

