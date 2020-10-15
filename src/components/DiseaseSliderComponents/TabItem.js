import React from "react";
import ListItemText from "@material-ui/core/ListItemText";
import ListItem from "@material-ui/core/ListItem";
import {ListItemIcon} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import clsx from "clsx";

const useStyles = makeStyles((theme) => ({
    isSelectedStyle: {
        fontWeight: 'bold',
    },
}));

function TabItem(props) {
    const classes = useStyles();
    const {text, icon, isSelected, onClick, className} = props;
    return (
        <ListItem button selected={isSelected} onClick={onClick} className={className} disableTouchRipple>
            <ListItemIcon classes={{
                root: className,
            }}>
                {icon}
            </ListItemIcon>
            <ListItemText primary={text} classes={{
                primary: clsx({[classes.isSelectedStyle]: isSelected})
            }}/>
        </ListItem>
    )
}

export default TabItem;
