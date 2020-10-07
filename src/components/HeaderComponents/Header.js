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
import ThemeContext from "../../contexts/themeContext/themeContext";
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';


const headerStyle = makeStyles((theme) => ({

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

    const diseasesMenuClicked = () => {
        props.setIsDiseaseMenuShown(!props.isDiseaseMenuShown);
    };

    const themeContext = useContext(ThemeContext);
    const {isDark, setDarkMode} = themeContext;

    return (
        <AppBar position="fixed" className={classes.appBar}>
            <Toolbar>
                <Hidden lgUp>
                    <IconButton onClick={diseasesMenuClicked} edge={"start"}>
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
                <FormControlLabel
                    className={'ml-auto'}
                    value="top"
                    control={<Switch color="primary"/>}
                    label="Top"
                    labelPlacement="top"
                />
                <AccountTabs/>
            </Toolbar>
        </AppBar>
    )
}

export default Header;

