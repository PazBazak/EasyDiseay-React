import React, {useEffect} from "react";
import Drawer from "@material-ui/core/Drawer";
import Divider from "@material-ui/core/Divider";
import DiseasesLists from "./DiseasesLists";
import {makeStyles} from "@material-ui/core/styles";
import {
    DISEASE_MENU_DRAWER_WIDTH,
    PAGE_WHITESPACES_LG,
    PAGE_WHITESPACES_XL
} from '../utils/Constants'
import {setIsDiseaseMenuShown} from "../../global_state/actions/headerActions";
import {useDispatch, useSelector} from "react-redux";

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
        maxHeight: '125vh',
        position: 'static',
        [theme.breakpoints.up('xl')]: {
            left: PAGE_WHITESPACES_XL,
        },
        [theme.breakpoints.down('lg')]: {
            left: PAGE_WHITESPACES_LG,
        },
        [theme.breakpoints.down('md')]: {
            left: 0,
            position: 'fixed',
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
    const dispatch = useDispatch();
    const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);
    const isDiseaseMenuShown = useSelector(state => state.headerState.isDiseaseMenuShown);

    const drawerProps = {
        className: classes.drawer,
        variant: "persistent",
        anchor: "left",
        open: isDrawerOpen,
        classes: {paper: classes.drawerPaper},
    };

    useEffect(() => {
        if (props.isSmallScreen) {
            setIsDrawerOpen(isDiseaseMenuShown);
        } else {
            setIsDrawerOpen(true);
            dispatch(setIsDiseaseMenuShown(false));
        }
        // eslint-disable-next-line
    }, [props.isSmallScreen, isDiseaseMenuShown]);

    return (
        <Drawer {...drawerProps}>
            <Divider/>
            <DiseasesLists/>
        </Drawer>
    )
}

export default DiseaseMenu;

