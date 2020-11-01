import {LOGIN_SUCCESS} from "../actions/types";


const initialState = {
    isAuthenticated: false,
    user: {}  // token, firstName, lastName, email
};

export default (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_SUCCESS:
            return {
                ...state,
                isAuthenticated: true,
                user: action.payload
            };
        default:
            return state;
    }
}

