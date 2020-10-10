import React, {useContext} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {ThemeProvider} from '@material-ui/styles';
import ArticleFeed from "../ArticleFeedComponents/ArticleFeed";
import Header from "../HeaderComponents/Header";
import DiseaseMenu from "../DiseaseSliderComponents/DiseaseMenu";
import baseTheme, {darkTheme} from '../../Themes/Themes'
import {createMuiTheme, useMediaQuery} from "@material-ui/core";
import clsx from 'clsx';
import ThemeContext from "../../contexts/themeContext/themeContext";
import Paper from "@material-ui/core/Paper";

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

function DiseasePage({match}) {
    const classes = mainPageStyle();
    const [isDiseaseMenuShown, setIsDiseaseMenuShown] = React.useState(false);
    const isSmallScreen = useMediaQuery(baseTheme.breakpoints.down("md"));
    const diseaseId = match.params.id;

    const themeContext = useContext(ThemeContext);
    const {isDark} = themeContext;

    return (
        <ThemeProvider theme={isDark ? createMuiTheme(darkTheme) : createMuiTheme(baseTheme)}>
            <div className={classes.root}>
                <Header isDiseaseMenuShown={isDiseaseMenuShown} setIsDiseaseMenuShown={setIsDiseaseMenuShown}/>
                <DiseaseMenu isDiseaseMenuShown={isDiseaseMenuShown} setIsDiseaseMenuShown={setIsDiseaseMenuShown}
                             isSmallScreen={isSmallScreen}/>
                <Paper className={clsx([classes.content],{
                    [classes.contentMobileModeStyle] :isSmallScreen})}>
                    <div className={classes.drawerHeader}/>
                    <ArticleFeed diseaseId={diseaseId}/>
                </Paper>
            </div>
        </ThemeProvider>
    );
}

export default DiseasePage;
