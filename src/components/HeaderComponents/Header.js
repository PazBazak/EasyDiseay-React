import React from "react";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import AppBar from "@material-ui/core/AppBar";
import Hidden from '@material-ui/core/Hidden';
import MenuIcon from '@material-ui/icons/Menu';
import {makeStyles, fade} from "@material-ui/core/styles";
import AccountTabs from "./AccountTabs";
import {Link} from 'react-router-dom';
import {SearchBarAppBar} from "../DiseaseSliderComponents/SearchBar";
import {APP_NAME} from "../utils/Constants";

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

    const diseasesMenuClicked = () => {
        props.setIsDiseaseMenuShown(!props.isDiseaseMenuShown);
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
                            {APP_NAME}
                        </Typography>
                    </IconButton>
                </div>
                <SearchBarAppBar/>
                <AccountTabs/>
            </Toolbar>
        </AppBar>
    )
}

export default Header;

