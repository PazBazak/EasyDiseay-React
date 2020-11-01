import {combineReducers} from 'redux';
import themeReducer from "./themeReducer";
import articlesReducer from "./articlesReducer";
import diseasesReducer from "./diseasesReducer";
import authReducer from "./authReducer";

export default combineReducers({
    themeState: themeReducer,
    articleState: articlesReducer,
    diseaseState: diseasesReducer,
    authState: authReducer,
});
