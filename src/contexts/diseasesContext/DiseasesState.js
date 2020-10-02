import React, {useReducer} from "react";
import DiseasesContext from "./diseasesContext";
import diseasesReducer from "./diseasesReducer";
import preMadeDiseases from "../../dataSources/diseases";

import {GET_ALL_DISEASES, SET_DISEASES} from "../types";

const DiseasesState = props => {
    const initialState = {
        diseases: []
    };

    const [state, dispatch] = useReducer(diseasesReducer, initialState);

    // Set Diseases
    const setDiseases = articles => {
        dispatch({type: SET_DISEASES, payload: articles})
    };

    // Fetch all diseases
const fetchDiseases = async () => {
    try {
        const fetchedDiseases = await fetch(process.env.REACT_APP_DISEASES_API_URL);
        const jsonFetchedDiseases = await fetchedDiseases.json();
        await dispatch({type: GET_ALL_DISEASES, payload: jsonFetchedDiseases});
    } catch (e) {
         await dispatch({type: GET_ALL_DISEASES, payload: preMadeDiseases});
    }
};

    return (
        <DiseasesContext.Provider value={{
            diseases: state.diseases,
            setDiseases,
            fetchDiseases
        }}>
            {props.children}
        </DiseasesContext.Provider>
    )
};

export default DiseasesState;