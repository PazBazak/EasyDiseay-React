import React, {useMemo} from 'react';
import './App.css';
import 'fontsource-roboto';
import MainPage from "./components/Pages/MainPage";
import DiseasePage from "./components/Pages/DiseasePage";
import NotFoundPage from "./components/Pages/NotFoundPage";
import {BrowserRouter as Router} from 'react-router-dom';
import {Route, Switch} from 'react-router';
import ThemeProvider from "@material-ui/styles/ThemeProvider";
import {createMuiTheme} from "@material-ui/core";
import {useSelector} from "react-redux";
import AboutUsPage from "./components/Pages/AboutUsPage";
import Footer from "./components/Footer/Footer";
import ScrollToTop from "./components/utils/ScrollToTop";
import Header from "./components/HeaderComponents/Header";

function App() {
    const isDark = useSelector(state => state.themeState.isDark);

    // creating a global theme
    const globalTheme = useMemo(() =>
            createMuiTheme({
                palette: {
                    type: isDark ? 'dark' : 'light',
                    primary: {
                        main: isDark ? '#424242' : '#1e88e5',
                    },
                    secondary: {
                        main: isDark ? '#ffc400' : '#ff0e4c',
                    },
                    background: {
                        paper: isDark ? '#303030' : 'white',
                    },
                },
                typography: {
                    fontSize: 14
                }
            }),
        [isDark]
    );

    return (
        <ThemeProvider theme={globalTheme}>
            <Router>
                <ScrollToTop>
                    <Header/>
                    <Switch>
                        <Route path={'/'} exact component={MainPage}/>
                        <Route path={'/aboutus'} exact component={AboutUsPage}/>
                        <Route path={'/disease/:id'} component={DiseasePage}/>
                        <Route component={NotFoundPage}/>
                    </Switch>
                    <Footer/>
                </ScrollToTop>
            </Router>
        </ThemeProvider>
    );
}

export default App;
