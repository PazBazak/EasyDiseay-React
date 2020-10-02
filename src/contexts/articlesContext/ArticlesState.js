import React, { useReducer } from "react";
import ArticlesContext from "./articlesContext";
import articlesReducer from "./articlesReducer";
import {SET_ARTICLES} from "../types";

const ArticleState = props => {
  const initialState = {
      articles: []
  };

  const [state, dispatch] = useReducer(articlesReducer, initialState);

  // Set Articles
    const setArticles = articles => {
        dispatch({type: SET_ARTICLES, payload: articles})
    };

    return (
        <ArticlesContext.Provider value={{
            articles: state.articles,
            setArticles
        }}>
            {props.children}
        </ArticlesContext.Provider>
    )
};

export default ArticleState;