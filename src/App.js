import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'fontsource-roboto';
import MainPage from "./components/Pages/MainPage";
import LoginPage from "./components/Pages/LoginPage";
import DiseasePage from "./components/Pages/DiseasePage";
import NotFoundPage from "./components/Pages/NotFoundPage";
import {BrowserRouter as Router} from 'react-router-dom';
import {Route, Switch} from 'react-router';
import ArticleState from "./contexts/articlesContext/ArticlesState";
import DiseasesState from "./contexts/diseasesContext/DiseasesState";
import SignUpPage from "./components/Pages/SignUpPage";
import ThemeState from "./contexts/themeContext/ThemeState";

function App() {
    return (
        <DiseasesState>
            <ArticleState>
                <ThemeState>
                    <Router>
                        <Switch>
                            <Route path={'/'} exact component={MainPage}/>
                            <Route path={'/disease/:id'} component={DiseasePage}/>
                            <Route component={NotFoundPage}/>
                        </Switch>
                    </Router>
                </ThemeState>
            </ArticleState>
        </DiseasesState>
    );
}

export default App;
