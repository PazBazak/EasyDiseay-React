import React, {useState} from 'react';
import {makeStyles, useTheme} from '@material-ui/core/styles';
import ArticleFeed from "../ArticleFeedComponents/ArticleFeed";
import Header from "../HeaderComponents/Header";
import DiseaseMenu from "../DiseaseSliderComponents/DiseaseMenu";
import {useMediaQuery} from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import clsx from 'clsx';
import {DISEASE_MENU_DRAWER_WIDTH, PAGE_WHITESPACES_LG, PAGE_WHITESPACES_XL} from '../utils/Constants'
import Popup from "../utils/Popup";
import LoginPage from "./LoginPage";
import SignUpPage from "./SignUpPage";
import {useDispatch, useSelector} from "react-redux";
import BouncePage from "./BouncePage";
import {clearSelectedArticle} from "../../global_state/actions/articlesActions";


const useStyle = makeStyles((theme) => ({
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
        minHeight: "100vh",
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
    const classes = useStyle();
    const [isDiseaseMenuShown, setIsDiseaseMenuShown] = useState(false);
    const isSmallScreen = useMediaQuery(baseTheme.breakpoints.down("md"));

    const dispatch = useDispatch();

    const [isLoginOpened, setIsLoginOpened] = useState(false);
    const [isSignupOpened, setIsSignUpOpened] = useState(false);
    const isBouncePageOpened = useSelector(state => state.articleState.isArticleSelected);
    const isDark = useSelector(state => state.themeState.isDark);

    const openSignUp = () => {
        closeLogin();
        setIsSignUpOpened(true);
    };

    const openLogin = () => {
        closeSignUp();
        setIsLoginOpened(true);
    };

    const closeLogin = () => {
        setIsLoginOpened(false);
    };

    const closeSignUp = () => {
        setIsSignUpOpened(false);
    };

    const closeBouncePage = () => {
        dispatch(clearSelectedArticle());
    };

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
                   onClose={closeLogin}>
                <LoginPage openSignUp={openSignUp}/>
            </Popup>
            <Popup isOpened={isSignupOpened}
                   onClose={closeSignUp}>
                <SignUpPage openSignIn={openLogin}/>
            </Popup>
            <Popup isOpened={isBouncePageOpened}
                   onClose={closeBouncePage}>
                <BouncePage/>
            </Popup>
        </ThemeProvider>
    );
}

export default MainPage;
