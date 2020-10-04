import React, {useReducer} from "react";
import ArticlesContext from "./articlesContext";
import articlesReducer from "./articlesReducer";
import preMadeFeeds from "../../dataSources/articles";
import {SET_ARTICLES} from "../types";

const ArticleState = props => {
    const initialState = {
        articles: []
    };

    const [state, dispatch] = useReducer(articlesReducer, initialState);

    // Fetch all articles
    const fetchArticles = async () => {
        try {
            const fetchedArticles = await fetch(process.env.REACT_APP_ARTICLES_API_URL);
            const jsonArticles = await fetchedArticles.json();
            await dispatch({type: SET_ARTICLES, payload: jsonArticles});
        } catch (e) {
            await dispatch({type: SET_ARTICLES, payload: preMadeFeeds});
        }
    };

    // Fetch articles for Disease ID
    const fetchArticlesForDisease = async (id, numOfArticles) => {
        try {
            const fetchedArticles = await fetch(`${process.env.REACT_APP_DISEASES_API_URL}${id}/${numOfArticles}/`);
            const jsonArticles = await fetchedArticles.json();
            await dispatch({type: SET_ARTICLES, payload: jsonArticles});
        } catch (e) {
            console.log('Could not get this diseases id articles ', e);
        }
    };

    return (
        <ArticlesContext.Provider value={{
            articles: state.articles,
            fetchArticles,
            fetchArticlesForDisease
        }}>
            {props.children}
        </ArticlesContext.Provider>
    )
};

export default ArticleState;