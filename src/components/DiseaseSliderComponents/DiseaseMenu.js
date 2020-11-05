import React, {useEffect} from "react";
import Drawer from "@material-ui/core/Drawer";
import Divider from "@material-ui/core/Divider";
import DiseasesLists from "./DiseasesLists";
import {makeStyles} from "@material-ui/core/styles";
import {DISEASE_MENU_DRAWER_WIDTH, PAGE_WHITESPACES_LG, PAGE_WHITESPACES_XL} from '../utils/Constants'

const DiseaseMenuStyle = makeStyles((theme) => ({
    drawer: {
        width: DISEASE_MENU_DRAWER_WIDTH,
        flexShrink: 0,
    },
    drawerPaper: {
        width: DISEASE_MENU_DRAWER_WIDTH,
        zIndex: 1,
        paddingTop: 60,
        border: 'none',
        maxHeight: '100vh',
        position: 'static',
        [theme.breakpoints.up('xl')]: {
            left: PAGE_WHITESPACES_XL,
        },
        [theme.breakpoints.down('lg')]: {
            left: PAGE_WHITESPACES_LG,
        },
        [theme.breakpoints.down('md')]: {
            left: 0,
        },
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
        // eslint-disable-next-line
    }, [props.isSmallScreen, props.isDiseaseMenuShown]);

    return (
        <Drawer {...drawerProps}>
            <Divider/>
            <DiseasesLists/>
        </Drawer>
    )
}

export default DiseaseMenu;

