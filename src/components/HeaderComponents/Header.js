import React from "react";
import clsx from "clsx";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import AppBar from "@material-ui/core/AppBar";
import {makeStyles} from "@material-ui/core/styles";
import AccountTabs from "./AccountTabs";

const drawerWidth = 240;

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
    appBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
}));


function Header(props) {
    const classes = headerStyle();

    return (
        <AppBar
            position="fixed"
            className={clsx(classes.appBar, {
                [classes.appBarShift]: props.diseaseListOpened,
            })}>
            <Toolbar>
                {/*Add icon here*/}
                <IconButton className={classes.titleButton} disableRipple edge={"start"} color="inherit" href={"/"}>
                    <Typography variant={"h4"}>
                        Easy Deasy
                    </Typography>
                </IconButton>
                <AccountTabs/>
            </Toolbar>
        </AppBar>
    )
}

export default Header;

