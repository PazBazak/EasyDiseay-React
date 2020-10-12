import React from "react";
import ListItemText from "@material-ui/core/ListItemText";
import ListItem from "@material-ui/core/ListItem";
import {ListItemIcon} from "@material-ui/core";


const TabItem = ({text, icon, isSelected, onClick}) => {
    return (
        <ListItem button selected={isSelected} onClick={onClick}>
            <ListItemIcon>
                {icon}
            </ListItemIcon>
            <ListItemText primary={text}/>
        </ListItem>
    )
};

export default TabItem;