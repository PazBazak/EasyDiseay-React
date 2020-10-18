import React, {useReducer} from "react";
import ThemeContext from "./themeContext";
import themeReducer from "./themeReducer";

import {SET_DARK_THEME} from "../types";

const ThemeState = props => {
    const initialState = {
        isDark: false,
    };

    const [state, dispatch] = useReducer(themeReducer, initialState);

    const setIsDarkMode = isDark => {
      dispatch({type: SET_DARK_THEME, payload: isDark})
    };

    return (
        <ThemeContext.Provider value={{
            isDark: state.isDark,
            setIsDarkMode,
        }}>
            {props.children}
        </ThemeContext.Provider>
    )
};

export default ThemeState;