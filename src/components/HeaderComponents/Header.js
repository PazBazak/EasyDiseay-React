import React from "react";
import clsx from "clsx";
import Toolbar from "@material-ui/core/Toolbar";
import Logo from "./Logo";
import AppBar from "@material-ui/core/AppBar";
import {makeStyles} from "@material-ui/core/styles";
import DiseaseMenuButton from "./DiseaseMenuButton";
import AccountTabs from "./AccountTabs";

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
}));

/**
 * The navbar of the website.
 * */
function Header(props) {
    const classes = headerStyle();

    return (
        <AppBar
            position="fixed"
            className={clsx(classes.appBar, {
                [classes.appBarShift]: props.diseaseListOpened,
            })}
        >
            <Toolbar>
                <DiseaseMenuButton setDiseaseListOpened={props.setDiseaseListOpened}
                                   diseaseListOpened={props.diseaseListOpened}/>
                <Logo/>
                <AccountTabs />
            </Toolbar>
        </AppBar>
    )
}

export default Header;

