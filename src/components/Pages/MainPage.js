import React, {useContext, useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import ThemeProvider from '@material-ui/styles/ThemeProvider';
import ArticleFeed from "../ArticleFeedComponents/ArticleFeed";
import Header from "../HeaderComponents/Header";
import DiseaseMenu from "../DiseaseSliderComponents/DiseaseMenu";
import baseTheme, {darkTheme} from '../../Themes/Themes'
import {createMuiTheme, useMediaQuery} from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import clsx from 'clsx';
import {DISEASE_MENU_DRAWER_WIDTH, PAGE_WHITESPACES_LG, PAGE_WHITESPACES_XL} from '../utils/Constants'
import ThemeContext from "../../contexts/themeContext/themeContext";
import Popup from "../utils/Popup";
import LoginPage from "./LoginPage";
import SignUpPage from "./SignUpPage";

const mainPageStyle = makeStyles((theme) => ({
    root: {
        display: 'flex',
        [theme.breakpoints.up('xl')]: {
            paddingLeft: PAGE_WHITESPACES_XL,
            paddingRight: PAGE_WHITESPACES_XL,
        },
        [theme.breakpoints.down('lg')]: {
            paddingLeft: PAGE_WHITESPACES_LG,
            paddingRight: PAGE_WHITESPACES_LG,
        },
        [theme.breakpoints.down('md')]: {
            paddingLeft: 0,
            paddingRight: 0,
        },
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
            <Paper className={classes.root}>
                <Header isDiseaseMenuShown={isDiseaseMenuShown}
                        setIsDiseaseMenuShown={setIsDiseaseMenuShown}
                        setIsLoginOpened={setIsLoginOpened}
                        setIsSignUpOpened={setIsSignUpOpened}/>
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
