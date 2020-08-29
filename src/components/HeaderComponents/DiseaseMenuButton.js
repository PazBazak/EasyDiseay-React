import React from "react";
import IconButton from "@material-ui/core/IconButton";
import clsx from "clsx";
import MenuIcon from "@material-ui/icons/Menu";
import {makeStyles} from "@material-ui/core/styles";

const headerStyle = makeStyles((theme) => ({
    menuButton: {
        marginRight: theme.spacing(2),
    },
    hide: {
        display: 'none',
    },
}));

function DiseaseMenuButton(props) {
    const classes = headerStyle();

    const openDiseaseList = () => {
        props.setDiseaseListOpened(true);
    };

    return (
        <div>
            <IconButton
                color="inherit"
                onClick={openDiseaseList}
                edge="start"
                className={clsx(classes.menuButton, props.diseaseListOpened && classes.hide)}
            >
                <MenuIcon/>
            </IconButton>
        </div>
    )
}

export default DiseaseMenuButton;

