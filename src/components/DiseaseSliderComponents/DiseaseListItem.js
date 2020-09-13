import React, { useState } from "react";
import ListItemText from "@material-ui/core/ListItemText";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faStar as Star} from "@fortawesome/free-regular-svg-icons";
import {faStar as FullStar} from "@fortawesome/free-solid-svg-icons";
import ListItem from "@material-ui/core/ListItem";
import {makeStyles} from "@material-ui/core/styles";
import yellow from "@material-ui/core/colors/yellow";
import clsx from 'clsx';

const DiseaseItemStyle = makeStyles((theme) => ({
    Followed: {
        color: yellow[700],
    },
    Icon: {
        visibility: "visible",
    },
    Hovered: {
        visibility: "visible",
    },
    Hide: {
        visibility: "hidden",
    },
}));

function DiseaseListItem(props) {
    const classes = DiseaseItemStyle();
    const [hovered, setHovered] = useState(false);

    function handleIconClick() {
        console.log('icon clicked')
    }

    return (
        <ListItem button onClick={() => {
            console.log('got clicked');
        }} onMouseEnter={() => {
            setHovered(true);
        }}
        onMouseLeave={() => {
            setHovered(false);
        }}>
            <ListItemText primary={props.diseaseName}/>
            <button className={classes.Hide} onClick={handleIconClick} >
                <FontAwesomeIcon icon={props.followed ? FullStar : Star}
                                 className={clsx({
                                     [classes.Followed]: props.followed,
                                     [classes.Hovered]: hovered || props.followed
                                 })}/>
            </button>
        </ListItem>
    )
}

export default DiseaseListItem;

