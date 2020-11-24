import {
    ADD_ARTICLES,
    ADD_COMMENT_ARTICLE_ERROR,
    ADD_DISEASE_ARTICLES,
    CLEAR_SELECTED_ARTICLE,
    LIKE_ARTICLE_ERROR,
    SET_ARTICLES,
    SET_ARTICLES_COUNT,
    SET_CHOSEN_DISEASE,
    SET_DISEASE_ARTICLES,
    SET_IS_ADD_COMMENT_ARTICLE_ERROR_RAISE,
    SET_IS_LIKE_ARTICLE_ERROR_RAISE,
    SET_SELECTED_ARTICLE,
} from "./types";
import preMadeFeeds from "../../data_sources/articles";

// Fetch all articles from API
// Should call 'reformatArticles' function before sent the articles to the next step.
export const fetchArticles = (page, addArticles = false) => async dispatch => {
    try {
        // if there's page in the input, it will fetch that page, if not, first page!
        const fetchedArticles = await fetch(page ?
            `${process.env.REACT_APP_LATESTS_ARTICLES_API_URL}?page=${page}`
            :
            process.env.REACT_APP_LATESTS_ARTICLES_API_URL);

        const jsonArticles = await fetchedArticles.json();
        await dispatch({type: SET_ARTICLES_COUNT, payload: jsonArticles.count});

        addArticles ?
            await dispatch({type: ADD_ARTICLES, payload: reformatArticles(jsonArticles.results)})
            :
            await dispatch({type: SET_ARTICLES, payload: reformatArticles(jsonArticles.results)});

    } catch (e) {
        console.log('Could not fetch Articles!');
        await dispatch({type: SET_ARTICLES, payload: reformatArticles(preMadeFeeds)});
        await dispatch({type: SET_ARTICLES_COUNT, payload: preMadeFeeds.length});
    }
};

// Fetch articles for Disease ID
// Should call 'reformatArticles' function before sent the articles to the next step.
export const fetchArticlesForDisease = (diseasesId, page, isNewDisease = true) => async (dispatch) => {
    try {
        const fetchedArticles = await fetch(`${process.env.REACT_APP_DISEASES_API_URL}${diseasesId}/latest_articles/?page=${page}`);
        const jsonArticles = await fetchedArticles.json();
        await dispatch({type: SET_ARTICLES_COUNT, payload: jsonArticles.count});
        await dispatch({type: SET_CHOSEN_DISEASE, payload: diseasesId});

        isNewDisease ?
            await dispatch({type: SET_DISEASE_ARTICLES, payload: reformatArticles(jsonArticles.results)})
            :
            await dispatch({type: ADD_DISEASE_ARTICLES, payload: reformatArticles(jsonArticles.results)});

    } catch (e) {
        console.log('Could not get this diseases id articles');
        await dispatch({type: SET_DISEASE_ARTICLES, payload: reformatArticles(preMadeFeeds)});
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