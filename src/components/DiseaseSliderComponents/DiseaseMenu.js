import React from "react";
import {useEffect} from 'react';
import Drawer from "@material-ui/core/Drawer";
import Divider from "@material-ui/core/Divider";
import DiseasesLists from "./DiseasesLists";
import {makeStyles} from "@material-ui/core/styles";

// Cool way to convert string to Int
const width = +(process.env.REACT_APP_DISEASE_MENU_DRAWER_WIDTH);
const DiseaseMenuStyle = makeStyles((theme) => ({
    drawer: {
        width: width,
        flexShrink: 0,
    },
    drawerPaper: {
        width: width,
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
    const {setIsDiseaseMenuShown} = props;
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
            setIsDiseaseMenuShown(false);
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

