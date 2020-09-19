import React, {useState} from "react";
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

    function handleIconClick(event) {
        if (props.disease.isFollowing) {
            props.unFollowDisease(props.disease.diseaseIndex)
        }
        else {
            props.followDisease(props.disease.diseaseIndex)
        }
        event.stopPropagation();
    }

    return (
        <ListItem button
                  onMouseEnter={() => {
                      setHovered(true);
                  }}
                  onMouseLeave={() => {
                      setHovered(false);
                  }}>
            <ListItemText primary={props.disease.name}/>
            <button className={classes.Hide} onClick={handleIconClick}>
                <FontAwesomeIcon icon={props.disease.isFollowing ? FullStar : Star}
                                 className={clsx({
                                     [classes.Followed]: props.disease.isFollowing,
                                     [classes.Hovered]: hovered || props.disease.isFollowing
                                 })}/>
            </button>
        </ListItem>
    )
}

export default DiseaseListItem;

