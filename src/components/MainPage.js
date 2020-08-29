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
        marginLeft: -drawerWidth,
    },
    contentShift: {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
    },
}));

function MainPage() {
    const classes = mainPageStyle();
    const [diseaseListOpened, setDiseaseListOpened] = React.useState(false);

    return (
        <ThemeProvider theme={theme}>
            <div className={classes.root}>
                <CssBaseline/>
                <Header diseaseListOpened={diseaseListOpened} setDiseaseListOpened={setDiseaseListOpened}/>
                <DiseaseMenu diseaseListOpened={diseaseListOpened}
                             setDiseaseListOpened={setDiseaseListOpened}/>
                <main
                    className={clsx(classes.content, {
                        [classes.contentShift]: diseaseListOpened && window.screen.availWidth > 600,
                    })}
                >
                    <div className={classes.drawerHeader}/>
                    <ArticleFeed/>
                </main>
            </div>
        </ThemeProvider>
    );
}

export default MainPage;
