import {SET_ARTICLES} from "./types";
import preMadeFeeds from "../dataSources/articles";

// Fetch all articles from API
export const fetchArticles = () => async dispatch => {
    try {
        const fetchedArticles = await fetch(process.env.REACT_APP_ARTICLES_API_URL);
        const jsonArticles = await fetchedArticles.json();
        await dispatch({type: SET_ARTICLES, payload: jsonArticles});
    } catch (e) {
        console.log('Could not fetch Articles!');
        await dispatch({type: SET_ARTICLES, payload: preMadeFeeds});
    }
};

// Fetch articles for Disease ID
export const fetchArticlesForDisease = () => async (dispatch, id, numOfArticles) => {
    try {
        const fetchedArticles = await fetch(`${process.env.REACT_APP_DISEASES_API_URL}${id}/${numOfArticles}/`);
        const jsonArticles = await fetchedArticles.json();
        await dispatch({type: SET_ARTICLES, payload: jsonArticles});
    } catch (e) {
        console.log('Could not get this diseases id articles ', e);
    }
};
