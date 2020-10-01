import React from "react";
import {useEffect} from 'react';
import Drawer from "@material-ui/core/Drawer";
import IconButton from "@material-ui/core/IconButton";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import Divider from "@material-ui/core/Divider";
import DiseasesLists from "./DiseasesLists";
import {makeStyles} from "@material-ui/core/styles";
import {useMediaQuery} from "@material-ui/core";

const drawerWidth = 240;

const DiseaseMenuStyle = makeStyles((theme) => ({
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
        zIndex: 1,
        paddingTop: 60,
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
    const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);

    const drawerProps = {
        className: classes.drawer,
        variant: "persistent",
        anchor: "left",
        open: isDrawerOpen,
        classes: {paper: classes.drawerPaper},
    };

    useEffect(() => {
        if (props.isSmallScreen) {
            setIsDrawerOpen(props.isDiseaseMenuShown);
        } else {
            setIsDrawerOpen(true);
            props.setIsDiseaseMenuShown(false);
        }
    }, [props.isSmallScreen, props.isDiseaseMenuShown]);

    return (
        <Drawer {...drawerProps}>
            <Divider/>
            <DiseasesLists/>
        </Drawer>
    )
}

export default DiseaseMenu;

