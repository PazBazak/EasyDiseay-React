import React, {useState} from "react";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import AppBar from "@material-ui/core/AppBar";
import Hidden from '@material-ui/core/Hidden';
import MenuIcon from '@material-ui/icons/Menu';
import {makeStyles} from "@material-ui/core/styles";
import HeaderTab from "./HeaderTab";
import {Link} from 'react-router-dom';
import {SearchBarAppBar} from "../DiseaseSliderComponents/SearchBar";
import {PAGE_WHITESPACES_LG, PAGE_WHITESPACES_XL} from "../utils/Constants";
import DarkModeToggle from "./DarkModeToggle";
import {useDispatch, useSelector} from "react-redux";
import {setIsDark} from "../../global_state/actions/themeActions";
import Popup from "../utils/Popup";
import LoginPage from "../Pages/LoginPage";
import SignUpPage from "../Pages/SignUpPage";
import {clearSelectedArticle} from "../../global_state/actions/articlesActions";
import BouncePage from "../Pages/BouncePage";


const useStyle = makeStyles((theme) => ({
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
    const classes = useStyle();
    const dispatch = useDispatch();

    const {
        setIsDiseaseMenuShown,
        isDiseaseMenuShown,
        isHeaderShouldBeStatic,
    } = props;

    const isDark = useSelector(state => state.themeState.isDark);

    const diseasesMenuClicked = () => {
        setIsDiseaseMenuShown(!isDiseaseMenuShown);
    };

    const [isLoginOpened, setIsLoginOpened] = useState(false);
    const [isSignupOpened, setIsSignUpOpened] = useState(false);

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


    // Toggles the dark mode, if the current theme is dark, then switch it to non-dark, and vice versa
    const toggleDarkMode = () => {
        dispatch(setIsDark(!isDark))
    };

    return (
        <AppBar
            position={isHeaderShouldBeStatic?'static':'fixed'}
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
                <HeaderTab
                    setIsLoginOpened={setIsLoginOpened}
                    setIsSignUpOpened={setIsSignUpOpened}/>
            </Toolbar>
            <Popup isOpened={isLoginOpened}
                   onClose={closeLogin}>
                <LoginPage openSignUp={openSignUp}/>
            </Popup>
            <Popup isOpened={isSignupOpened}
                   onClose={closeSignUp}>
                <SignUpPage openSignIn={openLogin}/>
            </Popup>
        </AppBar>
    )
}

export default Header;


