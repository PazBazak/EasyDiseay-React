import {
    SET_ARTICLES,
    SET_ARTICLES_COUNT,
    LIKE_ARTICLE_ERROR,
    SET_IS_LIKE_ARTICLE_ERROR_RAISE,
    SET_IS_ADD_COMMENT_ARTICLE_ERROR_RAISE,
    ADD_COMMENT_ARTICLE_ERROR,
    SET_SELECTED_ARTICLE,
    CLEAR_SELECTED_ARTICLE,
} from "../actions/types";

const initialState = {
    articles: [],
    articlesCount: null,
    isLikeArticleErrorRaise: false,
    isAddCommentArticleErrorRaise: false,
    likeArticleErrorContent: {},
    addCommentArticleErrorContent: {},
    isArticleSelected: false,
    selectedArticle: {}, /*The chosen article, the article that will be shown in the Bounce Page*/
};

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_ARTICLES:
            return {
                ...state,
                articles: [...state.articles, ...action.payload]
            };
        case SET_ARTICLES_COUNT:
            return {
                ...state,
                articlesCount: action.payload
            };
        case  LIKE_ARTICLE_ERROR:
            return {
                ...state,
                isLikeArticleErrorRaise: true,
                likeArticleErrorContent: action.payload,
            };
        case ADD_COMMENT_ARTICLE_ERROR:
            return {
                ...state,
                isAddCommentArticleErrorRaise: true,
                addCommentArticleErrorContent: action.payload,
            };
        case  SET_IS_LIKE_ARTICLE_ERROR_RAISE:
            return {
                ...state,
                isLikeArticleErrorRaise: action.payload,
                likeArticleErrorContent: {},
            };
        case  SET_IS_ADD_COMMENT_ARTICLE_ERROR_RAISE:
            return {
                ...state,
                isAddCommentArticleErrorRaise: action.payload,
                addCommentArticleErrorContent: {},
            };
        case  SET_SELECTED_ARTICLE:
            return {
                ...state,
                selectedArticle: action.payload,
                isArticleSelected: true,
            };
        case CLEAR_SELECTED_ARTICLE:
            return {
                ...state,
                selectedArticle: {},
                isArticleSelected: false,
            };
        default:
            return state;
    }
}

