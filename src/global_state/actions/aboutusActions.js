import {SET_TEAM_DETAILS} from "./types";
import preMadeTeamDetails from "../../data_sources/aboutUsDetails";

export const fetchTeamDetails = () => async dispatch => {
    try {
        const fetchedTeamDetails = await fetch(process.env.REACT_APP_ABOUTUS_DETAILS_API_URL);
        const jsonTeamDetails = await fetchedTeamDetails.json();
        await dispatch({type: SET_TEAM_DETAILS, payload: jsonTeamDetails});
    } catch (e) {
        await dispatch({type: SET_TEAM_DETAILS, payload: preMadeTeamDetails});
    }
};
