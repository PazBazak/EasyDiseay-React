import React from "react";
import Drawer from "@material-ui/core/Drawer";
import IconButton from "@material-ui/core/IconButton";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import Divider from "@material-ui/core/Divider";
import DiseaseList from "./DiseaseList";
import {makeStyles, useTheme} from "@material-ui/core/styles";

const drawerWidth = 240;

const DiseaseMenuStyle = makeStyles((theme) => ({
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
        zIndex: 1,
        paddingTop: 45,
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
    },
}));

function DiseaseMenu(props) {
    const classes = DiseaseMenuStyle();
    const theme = useTheme;

    return (
        <Drawer
            className={classes.drawer}
            variant="persistent"
            anchor="left"
            open
            classes={{
                paper: classes.drawerPaper,
            }}>
            <Divider/>
            <DiseaseList/>
        </Drawer>
    )
}

export default DiseaseMenu;

