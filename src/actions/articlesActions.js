import {SET_ARTICLES} from "./types";
import preMadeFeeds from "../dataSources/articles";

// Fetch all articles
const fetchArticles = () => async dispatch => {
    try {
        const fetchedArticles = await fetch(process.env.REACT_APP_ARTICLES_API_URL);
        const jsonArticles = await fetchedArticles.json();
        await dispatch({type: SET_ARTICLES, payload: jsonArticles});
    } catch (e) {
        console.log('Could not fetch Articles!');
        await dispatch({type: SET_ARTICLES, payload: preMadeFeeds});
    }
};
