import React, {useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {ThemeProvider} from '@material-ui/styles';
import ArticleFeed from "../ArticleFeedComponents/ArticleFeed";
import Header from "../HeaderComponents/Header";
import DiseaseMenu from "../DiseaseSliderComponents/DiseaseMenu";
import baseTheme, {darkTheme} from '../../Themes/Themes'
import {createMuiTheme, useMediaQuery} from "@material-ui/core";
import clsx from 'clsx';
import Paper from "@material-ui/core/Paper";
import {PAGE_WHITESPACES_LG, PAGE_WHITESPACES_XL} from "../utils/Constants";
import Popup from "../utils/Popup";
import LoginPage from "./LoginPage";
import SignUpPage from "./SignUpPage";
import {connect} from "react-redux";

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
        minHeight: "100vh",
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    contentMobileModeStyle: {
        marginLeft: -(process.env.REACT_APP_DISEASE_MENU_DRAWER_WIDTH),
    },
}));

function DiseasePage({match, isDark}) {
    const classes = mainPageStyle();
    const [isDiseaseMenuShown, setIsDiseaseMenuShown] = React.useState(false);
    const isSmallScreen = useMediaQuery(baseTheme.breakpoints.down("md"));
    const diseaseId = match.params.id;

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

    return (
        <ThemeProvider theme={createMuiTheme(isDark ? darkTheme : baseTheme)}>
            <Paper className={classes.root}>
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
                    <ArticleFeed diseaseId={diseaseId}/>
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

const mapStateToProps = state => ({
    isDark: state.themeState.isDark,
});

export default connect(mapStateToProps)(DiseasePage);
