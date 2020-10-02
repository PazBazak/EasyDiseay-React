import React, {useReducer} from "react";
import ArticlesContext from "./articlesContext";
import articlesReducer from "./articlesReducer";
import preMadeFeeds from "../../dataSources/articles";
import {GET_ALL_ARTICLES, SET_ARTICLES} from "../types";

const ArticleState = props => {
    const initialState = {
        articles: []
    };

    const [state, dispatch] = useReducer(articlesReducer, initialState);

    // Set Articles
    const setArticles = articles => {
        dispatch({type: SET_ARTICLES, payload: articles})
    };

    // Fetch all articles
    const fetchArticles = async () => {
        try {
            const fetchedArticles = await fetch(process.env.REACT_APP_ARTICLES_API_URL, {
                method: 'GET'
            });
            const jsonArticles = await fetchedArticles.json();
            await dispatch({type: GET_ALL_ARTICLES, payload: jsonArticles});
        } catch (e) {
            await dispatch({type: GET_ALL_ARTICLES, payload: preMadeFeeds});
        }
    };

    return (
        <ArticlesContext.Provider value={{
            articles: state.articles,
            setArticles,
            fetchArticles
        }}>
            {props.children}
        </ArticlesContext.Provider>
    )
};

export default ArticleState;