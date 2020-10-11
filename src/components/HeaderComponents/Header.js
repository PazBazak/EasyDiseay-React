import React, {useContext} from "react";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import AppBar from "@material-ui/core/AppBar";
import Hidden from '@material-ui/core/Hidden';
import MenuIcon from '@material-ui/icons/Menu';
import {makeStyles} from "@material-ui/core/styles";
import AccountTabs from "./AccountTabs";
import {Link} from 'react-router-dom';
import {SearchBarAppBar} from "../DiseaseSliderComponents/SearchBar";
import ThemeContext from "../../contexts/themeContext/themeContext";
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';


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
            zIndex: 1201
        }),
    },
    MenuIconStyle: {
        color: "white",
    },
}));


function Header(props) {
    const classes = headerStyle();
    const {setIsDiseaseMenuShown, isDiseaseMenuShown, setLoginOpened, setSignUpOpened} = props;

    const diseasesMenuClicked = () => {
        setIsDiseaseMenuShown(!isDiseaseMenuShown);
    };

    const themeContext = useContext(ThemeContext);
    const {isDark, setDarkMode} = themeContext;

    // Toggles the dark mode, if the current theme is dark, then switch it to non-dark, and vice versa
    const handleDarkModeSwitch = () => {
        setDarkMode(!isDark)
    };


    return (
        <AppBar
            position="fixed"
            className={classes.appBar}>
            <Toolbar>
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
                <FormControlLabel
                    className={'ml-auto mt-3 mr-2'}
                    value="top"
                    control={<Switch checked={isDark}/>}
                    label="Dark Mode"
                    labelPlacement="start"
                    onChange={handleDarkModeSwitch}
                />
                <SearchBarAppBar/>
                <AccountTabs
                    setLoginOpened={setLoginOpened}
                    setSignUpOpened={setSignUpOpened}/>
            </Toolbar>
        </AppBar>
    )
}

export default Header;

