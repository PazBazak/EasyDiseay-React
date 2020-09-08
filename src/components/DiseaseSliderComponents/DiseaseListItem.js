import React from "react";
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
}));

function DiseaseListItem(props) {
    const classes = DiseaseItemStyle();

    return (
        <ListItem button onClick={() => {console.log('got clicked')}} onMouseEnter={() => {console.log('got mouse over')}}>
            <ListItemText primary={props.diseaseName}/>
            <FontAwesomeIcon icon={props.followed ? FullStar : Star}
                             className={'star-icon ' + clsx({[classes.Followed]: props.followed})} />
        </ListItem>
    )
}

export default DiseaseListItem;

