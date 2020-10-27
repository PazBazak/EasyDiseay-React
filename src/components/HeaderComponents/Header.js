import React from "react";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import AppBar from "@material-ui/core/AppBar";
import Hidden from '@material-ui/core/Hidden';
import MenuIcon from '@material-ui/icons/Menu';
import {makeStyles} from "@material-ui/core/styles";
import AuthTabs from "./AuthTabs";
import {Link} from 'react-router-dom';
import {SearchBarAppBar} from "../DiseaseSliderComponents/SearchBar";
import {PAGE_WHITESPACES_LG, PAGE_WHITESPACES_XL} from "../utils/Constants";
import DarkModeToggle from "./DarkModeToggle";
import {useSelector, useDispatch} from "react-redux";
import {setIsDark} from "../../global_state/actions/themeActions";


const headerStyle = makeStyles((theme) => ({
    title: {
        flexGrow: 1,
    },
    titleButton: {
        "&:hover": {
            backgroundColor: "transparent",
            textDecoration: "none",
            color: "inherit"
        },
        "&:focus": {outline: "none"}
    },
    appBar: {
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    MenuIconStyle: {
        color: "white",
    },
    ToolBar: {
        [theme.breakpoints.up('xl')]: {
            paddingLeft: PAGE_WHITESPACES_XL + 16,
            paddingRight: PAGE_WHITESPACES_XL + 32.
        },
        [theme.breakpoints.down('lg')]: {
            paddingLeft: PAGE_WHITESPACES_LG + 16,
            paddingRight: PAGE_WHITESPACES_LG + 32,
        },
        [theme.breakpoints.down('md')]: {
            paddingLeft: 16,
            paddingRight: 32,
        },
    },
}));


function Header(props) {
    const classes = headerStyle();
    const dispatch = useDispatch();

    const {
        setIsDiseaseMenuShown,
        isDiseaseMenuShown,
        setIsLoginOpened,
        setIsSignUpOpened,
    } = props;

    const isDark = useSelector(state => state.themeState.isDark);

    const diseasesMenuClicked = () => {
        setIsDiseaseMenuShown(!isDiseaseMenuShown);
    };


    // Toggles the dark mode, if the current theme is dark, then switch it to non-dark, and vice versa
    const toggleDarkMode = () => {
        dispatch(setIsDark(!isDark))
    };

    return (
        <AppBar
            position="fixed"
            className={classes.appBar}>
            <Toolbar className={classes.ToolBar} variant={'dense'}>
                <div className={classes.title}>
                    <Hidden lgUp>
                        <IconButton
                            onClick={diseasesMenuClicked}
                            edge={"start"}>
                            <MenuIcon className={classes.MenuIconStyle}/>
                        </IconButton>
                    </Hidden>
                    {/*Add icon here*/}
                    <IconButton
                        className={classes.titleButton}
                        disableRipple
                        edge={"start"}
                        color="inherit"
                        component={Link}
                        to={'/'}>
                        <Typography variant={"h4"}>
                            EasyDeasy
                        </Typography>
                    </IconButton>
                </div>
                <SearchBarAppBar/>
                <DarkModeToggle toggleDarkMode={toggleDarkMode} isDark={isDark}/>
                <AuthTabs
                    setIsLoginOpened={setIsLoginOpened}
                    setIsSignUpOpened={setIsSignUpOpened}/>
            </Toolbar>
        </AppBar>
    )
}

export default Header;


