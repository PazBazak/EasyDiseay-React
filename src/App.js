import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'fontsource-roboto';
import DiseasePage from "./components/DiseasePage";
import NotFoundPage from "./components/NotFoundPage";
import {BrowserRouter as Router} from 'react-router-dom';
import {Route, Switch} from 'react-router';
import ArticleState from "./contexts/articlesContext/ArticlesState";
import MainPage from "./components/Pages/MainPage";
import LoginPage from "./components/Pages/LoginPage";
import SignUpPage from "./components/Pages/SignUpPage";


function App() {
    return (
        <ArticleState>
            <Router>
                <Switch>
                    <Route path={'/'} exact component={MainPage}/>
                    <Route path={'/disease/:id'} component={DiseasePage}/>
                    <Route path={'/login'} component={LoginPage}/>
                    <Route path={'/signup'} component={SignUpPage}/>
                    <Route component={NotFoundPage}/>
                </Switch>
            </Router>
        </ArticleState>
    );
}

export default App;
