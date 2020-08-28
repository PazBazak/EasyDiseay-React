import React from "react";
import clsx from "clsx";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Logo from "./Logo";
import AppBar from "@material-ui/core/AppBar";
import {makeStyles} from "@material-ui/core/styles";

const drawerWidth = 240;

const headerStyle = makeStyles((theme) => ({

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
}));


function Header(props) {
    const classes = headerStyle();

    const openDiseaseList = () => {
        props.setDiseaseListOpened(true);
    };

    return (
        <div>
            <AppBar
                position="fixed"
                className={clsx(classes.appBar, {
                    [classes.appBarShift]: props.diseaseListOpened,
                })}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        onClick={openDiseaseList}
                        edge="start"
                        className={clsx(classes.menuButton, props.diseaseListOpened && classes.hide)}
                    >
                        <MenuIcon/>
                    </IconButton>
                    <Logo/>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Header;

