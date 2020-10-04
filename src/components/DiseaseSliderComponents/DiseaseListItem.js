import React, {useState} from "react";
import ListItemText from "@material-ui/core/ListItemText";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faStar as Star} from "@fortawesome/free-regular-svg-icons";
import {faStar as FullStar} from "@fortawesome/free-solid-svg-icons";
import ListItem from "@material-ui/core/ListItem";
import {makeStyles} from "@material-ui/core/styles";
import yellow from "@material-ui/core/colors/yellow";
import clsx from 'clsx';
import {Link} from 'react-router-dom'

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

    function handleFollowIconClick(event) {
        props.handleFollow(props.disease.diseaseIndex);
        event.stopPropagation();
    }

    return (
        <Link to={`/disease/${props.disease.id}`} replace style={{ textDecoration: 'none' }}>
            <ListItem button
                      onMouseEnter={() => {
                          setHovered(true);
                      }}
                      onMouseLeave={() => {
                          setHovered(false);
                      }}>
                <ListItemText primary={props.disease.name} style={{color: 'black'}}/>
                <button className={classes.Hide} onClick={handleFollowIconClick}>
                    <FontAwesomeIcon icon={props.disease.isFollowing ? FullStar : Star}
                                     className={clsx({
                                         [classes.Followed]: props.disease.isFollowing,
                                         [classes.Hovered]: hovered || props.disease.isFollowing
                                     })}/>
                </button>
            </ListItem>
        </Link>
    )
}

export default DiseaseListItem;

