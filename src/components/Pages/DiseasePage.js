import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {ThemeProvider} from '@material-ui/styles';
import ArticleFeed from "../ArticleFeedComponents/ArticleFeed";
import Header from "../HeaderComponents/Header";
import DiseaseMenu from "../DiseaseSliderComponents/DiseaseMenu";
import baseTheme from '../../Themes/mainTheme'
import {useMediaQuery} from "@material-ui/core";
import clsx from 'clsx';

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
        marginLeft: -(process.env.REACT_APP_DISEASE_MENU_DRAWER_WIDTH),
    },
}));

function DiseasePage({match}) {
    const classes = mainPageStyle();
    const [isDiseaseMenuShown, setIsDiseaseMenuShown] = React.useState(false);
    const isSmallScreen = useMediaQuery(baseTheme.breakpoints.down("md"));
    const diseaseId = match.params.id;

    return (
        <ThemeProvider theme={baseTheme}>
            <div className={classes.root}>
                <Header isDiseaseMenuShown={isDiseaseMenuShown} setIsDiseaseMenuShown={setIsDiseaseMenuShown}/>
                <DiseaseMenu isDiseaseMenuShown={isDiseaseMenuShown} setIsDiseaseMenuShown={setIsDiseaseMenuShown}
                             isSmallScreen={isSmallScreen}/>
                <main className={clsx([classes.content],{
                    [classes.contentMobileModeStyle] :isSmallScreen})}>
                    <div className={classes.drawerHeader}/>
                    <ArticleFeed diseaseId={diseaseId}/>
                </main>
            </div>
        </ThemeProvider>
    );
}

export default DiseasePage;
