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
// Should call 'reformatArticles' function before sent the articles to the next step.
export const fetchArticles = () => async dispatch => {
    try {
        const fetchedArticles = await fetch(process.env.REACT_APP_ARTICLES_API_URL);
        const jsonArticles = await fetchedArticles.json();
        await dispatch({type: SET_ARTICLES, payload: jsonArticles});
    } catch (e) {
        console.log('Could not fetch Articles!');
        await dispatch({type: SET_ARTICLES, payload: reformatArticles(preMadeFeeds)});
    }
};

// Fetch articles for Disease ID
export const fetchArticlesForDisease = (id, numOfArticles) => async (dispatch) => {
    try {
        console.log(numOfArticles);
        console.log(id);
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

// Reformat the articles to react standards.
const reformatArticles = (articlesAsOrigin) => {
    // Change field: source_site -> website
    let reformatRegexSourceSite = new RegExp('source_site', 'g');
    let articles = JSON.stringify(articlesAsOrigin).replace(reformatRegexSourceSite, 'website');

    // Change field: time_to_read -> timeToRead
    let reformatRegexTimeToRead = new RegExp('time_to_read', 'g');
    articles = articles.replace(reformatRegexTimeToRead, 'timeToRead');

    // Change field: published_date -> publishedDate
    let reformatRegexPublishedDate = new RegExp('published_date', 'g');
    articles = articles.replace(reformatRegexPublishedDate, 'publishedDate');

    return JSON.parse(articles);
};