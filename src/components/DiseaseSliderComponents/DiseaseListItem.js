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
    Text: {
        color: theme.palette.type === "light" ? "black" : "white",
    },
    Item: {
        justifyContent: 'flex-end',
    },
    Link: {
        marginRight: 'auto',
        flexGrow: 1,
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
        <ListItem button
                  disableTouchRipple
                  onMouseEnter={() => {
                      setHovered(true);
                  }}
                  onMouseLeave={() => {
                      setHovered(false);
                  }}
                  className={classes.Item}>
            <Link className={classes.Link} style={{textDecoration: 'none'}} to={`/disease/${props.disease.id}`} replace>
                <ListItemText className={classes.Text} primary={props.disease.name}/>
            </Link>
            <button className={classes.Hide} onClick={handleFollowIconClick}>
                <FontAwesomeIcon icon={props.disease.isFollowing ? FullStar : Star}
                                 className={clsx({
                                     [classes.Followed]: props.disease.isFollowing,
                                     [classes.Hovered]: hovered || props.disease.isFollowing})}/>
            </button>
        </ListItem>
    )
}

export default DiseaseListItem;

