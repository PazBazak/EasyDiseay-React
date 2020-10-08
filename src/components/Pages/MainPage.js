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
import {DISEASE_MENU_DRAWER_WIDTH} from '../utils/Constants'
import ThemeContext from "../../contexts/themeContext/themeContext";
import { createMuiTheme} from "@material-ui/core";
import Popup from "../utils/Popup";
import LoginPage from "./LoginPage";

const mainPageStyle = makeStyles((theme) => ({
    root: {
        display: 'flex',
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
    const [formPopupOpened, setFormPopupOpened] = useState(false);

    const themeContext = useContext(ThemeContext);
    const {isDark} = themeContext;

    return (
        <ThemeProvider theme={createMuiTheme(isDark ? darkTheme : baseTheme)}>
            <CssBaseline />
            <Paper className={classes.root} >
                <Header isDiseaseMenuShown={isDiseaseMenuShown}
                        setIsDiseaseMenuShown={setIsDiseaseMenuShown}
                        setFormPopupOpened={setFormPopupOpened}
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
             <Popup opened={formPopupOpened}
                   setOpened={setFormPopupOpened}>
                <LoginPage />
            </Popup>
        </ThemeProvider>
    );
}

export default MainPage;
