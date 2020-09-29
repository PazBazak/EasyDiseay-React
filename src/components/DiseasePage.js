import React from 'react';
import clsx from 'clsx';
import {makeStyles} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import {ThemeProvider} from '@material-ui/styles';
import ArticleFeed from "./ArticleFeedComponents/ArticleFeed";
import Header from "./HeaderComponents/Header";
import DiseaseMenu from "./DiseaseSliderComponents/DiseaseMenu";
import theme from '../Themes/mainTheme'

const drawerWidth = 240;

const useStyle = makeStyles((theme) => ({
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
    contentShift: {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
    },
}));

function DiseasePage({match}) {
    const classes = useStyle();
    const [diseaseListOpened, setDiseaseListOpened] = React.useState(false);
    const diseaseId = match.params.id;

    return (
        <ThemeProvider theme={theme}>
            <div className={classes.root}>
                <Header/>
                <DiseaseMenu/>
                <main className={clsx(classes.content, {
                    [classes.contentShift]: diseaseListOpened && window.screen.availWidth > 600,
                })}>
                    <div className={classes.drawerHeader}/>
                    <ArticleFeed/>
                </main>
            </div>
        </ThemeProvider>
    );
}

export default DiseasePage;
