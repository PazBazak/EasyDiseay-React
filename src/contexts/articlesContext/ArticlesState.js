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
            const fetchedArticles = await fetch(process.env.REACT_APP_ARTICLES_API_URL, {
                method: 'GET'
            });
            const jsonArticles = await fetchedArticles.json();
            await dispatch({type: SET_ARTICLES, payload: jsonArticles});
        } catch (e) {
            await dispatch({type: SET_ARTICLES, payload: preMadeFeeds});
        }
    };

    return (
        <ArticlesContext.Provider value={{
            articles: state.articles,
            fetchArticles
        }}>
            {props.children}
        </ArticlesContext.Provider>
    )
};

export default ArticleState;