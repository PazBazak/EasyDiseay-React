import {combineReducers} from 'redux';
import themeReducer from "./themeReducer";
import articlesReducer from "./articlesReducer";
import diseasesReducer from "./diseasesReducer";
import authReducer from "./authReducer";
import headerReducer from "./headerReducer";
import aboutusReducer from "./aboutusReducer";

export default combineReducers({
    themeState: themeReducer,
    articleState: articlesReducer,
    diseaseState: diseasesReducer,
    authState: authReducer,
    headerState: headerReducer,
    aboutusState: aboutusReducer,
});
