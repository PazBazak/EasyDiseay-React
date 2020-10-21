import {SET_DISEASES} from "./types";
import preMadeDiseases from "../../data_sources/diseases";

// Fetch all diseases from API
export const fetchDiseases = () => async dispatch => {
    try {
        const fetchedDiseases = await fetch(process.env.REACT_APP_DISEASES_API_URL);
        const jsonDiseases = await fetchedDiseases.json();
        await jsonDiseases.forEach((disease => disease.isFollowing = false));
        await dispatch({type: SET_DISEASES, payload: jsonDiseases});
    } catch (e) {
        console.log('Could not fetch Diseases!');
        await dispatch({type: SET_DISEASES, payload: preMadeDiseases});
    }
};
