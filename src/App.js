import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'fontsource-roboto';
import MainPage from "./components/Pages/MainPage";
import DiseasePage from "./components/Pages/DiseasePage";
import NotFoundPage from "./components/Pages/NotFoundPage";
import {BrowserRouter as Router} from 'react-router-dom';
import {Route, Switch} from 'react-router';
import ThemeProvider from "@material-ui/styles/ThemeProvider";
import {createMuiTheme} from "@material-ui/core";
import baseTheme, {darkTheme} from "./Themes/Themes";
import {useSelector} from "react-redux";

function App() {
    const isDark = useSelector(state => state.themeState.isDark);

    return (
        <ThemeProvider theme={createMuiTheme(isDark ? darkTheme : baseTheme)}>
            <Router>
                <Switch>
                    <Route path={'/'} exact component={MainPage}/>
                    <Route path={'/disease/:id'} component={DiseasePage}/>
                    <Route component={NotFoundPage}/>
                </Switch>
            </Router>
        </ThemeProvider>
    );
}

export default App;
