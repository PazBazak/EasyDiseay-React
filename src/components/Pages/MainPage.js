import React, {useContext, useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import ThemeProvider from '@material-ui/styles/ThemeProvider';
import ArticleFeed from "../ArticleFeedComponents/ArticleFeed";
import CssBaseline from "@material-ui/core/CssBaseline";
import Header from "../HeaderComponents/Header";
import DiseaseMenu from "../DiseaseSliderComponents/DiseaseMenu";
import baseTheme, {darkTheme} from '../../Themes/Themes'
import {useMediaQuery} from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import clsx from 'clsx';
import {DISEASE_MENU_DRAWER_WIDTH, PAGE_WHITESPACES} from '../utils/Constants'
import {DISEASE_MENU_DRAWER_WIDTH} from '../utils/Constants'
import ThemeContext from "../../contexts/themeContext/themeContext";
import { createMuiTheme} from "@material-ui/core";
import Popup from "../utils/Popup";
import LoginPage from "./LoginPage";
import SignUpPage from "./SignUpPage";

const mainPageStyle = makeStyles((theme) => ({
    root: {
        display: 'flex',
        paddingLeft: PAGE_WHITESPACES,
        paddingRight: PAGE_WHITESPACES,
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    contentMobileModeStyle: {
        marginLeft: -(DISEASE_MENU_DRAWER_WIDTH),
    },
}));

function MainPage() {
    const classes = mainPageStyle();
    const [isDiseaseMenuShown, setIsDiseaseMenuShown] = useState(false);
    const isSmallScreen = useMediaQuery(baseTheme.breakpoints.down("md"));

    const [isLoginOpened, setIsLoginOpened] = useState(false);
    const [isSignupOpened, setIsSignUpOpened] = useState(false);

    const openSignUp = () => {
        setIsLoginOpened(false);
        setIsSignUpOpened(true);
    };

    const openLogin = () => {
        setIsSignUpOpened(false);
        setIsLoginOpened(true);
    };

    const themeContext = useContext(ThemeContext);
    const {isDark} = themeContext;

    return (
        <ThemeProvider theme={createMuiTheme(isDark ? darkTheme : baseTheme)}>
            <CssBaseline />
            <Paper className={classes.root} >
                <Header isDiseaseMenuShown={isDiseaseMenuShown}
                        setIsDiseaseMenuShown={setIsDiseaseMenuShown}
                        setIsLoginOpened={setIsLoginOpened}
                        setIsSignUpOpened={setIsSignUpOpened}
                />
                <DiseaseMenu isDiseaseMenuShown={isDiseaseMenuShown} setIsDiseaseMenuShown={setIsDiseaseMenuShown}
                             isSmallScreen={isSmallScreen}/>
                <main className={clsx([classes.content], {
                    [classes.contentMobileModeStyle]: isSmallScreen
                })}>
                    <div className={classes.drawerHeader}/>
                    <ArticleFeed/>
                </main>
            </Paper>
             <Popup isOpened={isLoginOpened}
                   setIsOpened={setIsLoginOpened}>
                <LoginPage openSignUp={openSignUp}/>
            </Popup>
            <Popup isOpened={isSignupOpened}
                   setIsOpened={setIsSignUpOpened}>
                <SignUpPage openSignIn={openLogin}/>
            </Popup>
        </ThemeProvider>
    );
}

export default MainPage;
