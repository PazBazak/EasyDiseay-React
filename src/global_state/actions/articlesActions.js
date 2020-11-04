import {SET_ARTICLES} from "./types";
import preMadeFeeds from "../../data_sources/articles";
import {LOADED_ARTICLES} from "../../components/utils/Constants";

// Fetch all articles from API
export const fetchArticles = () => async dispatch => {
    try {
        const fetchedArticles = await fetch(`${process.env.REACT_APP_LATEST_ARTICLES_API_URL}${LOADED_ARTICLES}/`);
        const jsonArticles = await fetchedArticles.json();
        await dispatch({type: SET_ARTICLES, payload: jsonArticles});
    } catch (e) {
        console.log('Could not fetch Articles!');
        await dispatch({type: SET_ARTICLES, payload: preMadeFeeds});
    }
};

// Fetch articles for Disease ID
export const fetchArticlesForDisease = (id) => async (dispatch) => {
    try {
        const fetchedArticles = await fetch(`${process.env.REACT_APP_DISEASES_API_URL}${id}/${LOADED_ARTICLES}/`);
        const jsonArticles = await fetchedArticles.json();
        await dispatch({type: SET_ARTICLES, payload: jsonArticles});
    } catch (e) {
        console.log('Could not get this diseases id articles ');
    }
};

