import {
    ADD_COMMENT_ARTICLE_ERROR,
    LIKE_ARTICLE_ERROR,
    SET_IS_ADD_COMMENT_ARTICLE_ERROR_RAISE,
    SET_IS_LIKE_ARTICLE_ERROR_RAISE,
    SET_ARTICLES,
    SET_SELECTED_ARTICLE,
    CLEAR_SELECTED_ARTICLE,
} from "./types";
import preMadeFeeds from "../../data_sources/articles";

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
export const fetchArticlesForDisease = (id, numOfArticles) => async (dispatch) => {
    try {
        const fetchedArticles = await fetch(`${process.env.REACT_APP_DISEASES_API_URL}${id}/${numOfArticles}/`);
        const jsonArticles = await fetchedArticles.json();
        await dispatch({type: SET_ARTICLES, payload: jsonArticles});
    } catch (e) {
        console.log('Could not get this diseases id articles');
        await dispatch({type: SET_ARTICLES, payload: preMadeFeeds});
    }
};

/* Like article by ID, send GET request to the server includes article's ID and userID, the server toggle the like flag
   so no need to pass bool value with it, only the ID of the article is matter.*/
export const likeArticleByID = (articleID, userID) => async (dispatch) => {
    try {
        let response = await fetch(`${process.env.REACT_APP_ARTICLES_LIKES_API_URL}${articleID}/${userID}/`);
        if (!response.ok) {
            await dispatch({type: LIKE_ARTICLE_ERROR, payload: await response.json()});
        }
    } catch (e) {
        console.error(e.name + ': ' + e.message);
        console.log("Could not finish 'Like' process as wanted");
        await dispatch({type: LIKE_ARTICLE_ERROR});
        console.log('Could not get this diseases id articles ');
        await dispatch({type: SET_ARTICLES, payload: preMadeFeeds});
    }
};

/* Add comment to article, send POST request to the server includes article's ID, userID commentContent and commentTitle,*/
export const addCommentToArticleByID = (articleID, userID, commentContent, commentTitle) => async (dispatch) => {
    try {
        let requestOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                userID: userID,
                commentTitle: commentTitle,
                comment: commentContent,
            })
        };
        let response = await fetch(`${process.env.REACT_APP_ARTICLES_COMMENTS_API_URL}${articleID}`, requestOptions);
        if (!response.ok) {
            await dispatch({type: ADD_COMMENT_ARTICLE_ERROR, payload: await response.json()});
        }
    } catch (e) {
        console.error(e.name + ': ' + e.message);
        console.log("Could not finish 'add comment' process as wanted");
        await dispatch({type: ADD_COMMENT_ARTICLE_ERROR});
    }
};

export const setIsLikeArticleErrorRaise = (value = false) => async (dispatch) => {
    dispatch({type: SET_IS_LIKE_ARTICLE_ERROR_RAISE, payload: value});
};

export const setIsAddCommentArticleErrorRaise = (value = false) => async (dispatch) => {
    dispatch({type: SET_IS_ADD_COMMENT_ARTICLE_ERROR_RAISE, payload: value});
};

export const setSelectedArticle = (value) => async (dispatch) => {
    await dispatch({type: SET_SELECTED_ARTICLE, payload: value});
};

export const clearSelectedArticle = () => (dispatch) => {
    dispatch({type: CLEAR_SELECTED_ARTICLE});
};