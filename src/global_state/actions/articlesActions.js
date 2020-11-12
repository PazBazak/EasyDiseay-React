import {SET_ARTICLES} from "./types";
import preMadeFeeds from "../../data_sources/articles";

// Fetch all articles from API
export const fetchArticles = () => async dispatch => {
    try {
        const fetchedArticles = await fetch(process.env.REACT_APP_ARTICLES_API_URL);
        const jsonArticles = await fetchedArticles.json();
        await dispatch({type: SET_ARTICLES, payload: jsonArticles});
    } catch (e) {
        console.log('Could not fetch Articles!');

    }
};

// Fetch articles for Disease ID
export const fetchArticlesForDisease = (id, numOfArticles) => async (dispatch) => {
    try {
        const fetchedArticles = await fetch(`${process.env.REACT_APP_DISEASES_API_URL}${id}/${numOfArticles}/`);
        const jsonArticles = await fetchedArticles.json();
        await dispatch({type: SET_ARTICLES, payload: jsonArticles});
    } catch (e) {
        console.log('Could not get this diseases id articles ');
        await dispatch({type: SET_ARTICLES, payload: preMadeFeeds});
    }
};

