import React from 'react';
import clsx from 'clsx';
import {createMuiTheme, makeStyles} from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import {blue} from "@material-ui/core/colors";
import {ThemeProvider} from '@material-ui/styles';
import DiseaseList from "./DiseaseSliderComponents/DiseaseList";
import ArticleFeed from "./ArticleFeedComponents/ArticleFeed";
import Header from "./HeaderComponents/Header";

const drawerWidth = 240;

const mainPageStyle = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    appBar: {
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    hide: {
        display: 'none',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
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

    const theme = createMuiTheme({
        palette: {
            primary: {
                main: blue[600]
            },
            secondary: {
                main: '#ffc400'
            },
        },
    });

    const handleDrawerClose = () => {
        setDiseaseListOpened(false);
    };

    return (
        <ThemeProvider theme={theme}>
            <div className={classes.root}>
                <CssBaseline/>
                <Header diseaseListOpened={diseaseListOpened} setDiseaseListOpened={setDiseaseListOpened}/>
                <Drawer
                    className={classes.drawer}
                    variant="persistent"
                    anchor="left"
                    open={diseaseListOpened}
                    classes={{
                        paper: classes.drawerPaper,
                    }}
                >
                    <div className={classes.drawerHeader}>
                        <IconButton onClick={handleDrawerClose}>
                            {theme.direction === 'ltr' ? <ChevronLeftIcon/> : <ChevronRightIcon/>}
                        </IconButton>
                    </div>
                    <Divider/>
                    <DiseaseList/>
                </Drawer>
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
