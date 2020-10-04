import React, {useReducer} from "react";
import DiseasesContext from "./diseasesContext";
import diseasesReducer from "./diseasesReducer";
import preMadeDiseases from "../../dataSources/diseases";

import {SET_DISEASES} from "../types";

const DiseasesState = props => {
    const initialState = {
        diseases: []
    };

    const [state, dispatch] = useReducer(diseasesReducer, initialState);

    // Fetch all diseases
    const fetchDiseases = async () => {
        try {
            const fetchedDiseases = await fetch(process.env.REACT_APP_DISEASES_API_URL);
            const jsonFetchedDiseases = await fetchedDiseases.json();
            await jsonFetchedDiseases.forEach((disease => disease.isFollowing = false));
            await dispatch({type: SET_DISEASES, payload: jsonFetchedDiseases});
        } catch (e) {
            await dispatch({type: SET_DISEASES, payload: preMadeDiseases});
        }
    };

    return (
        <DiseasesContext.Provider value={{
            diseases: state.diseases,
            fetchDiseases
        }}>
            {props.children}
        </DiseasesContext.Provider>
    )
};

export default DiseasesState;