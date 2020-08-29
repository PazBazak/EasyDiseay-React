import React from "react";
import ListItemText from "@material-ui/core/ListItemText";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faStar as Star} from "@fortawesome/free-regular-svg-icons";
import ListItem from "@material-ui/core/ListItem";


function DiseaseListItem(props) {
    return (
        <ListItem button onClick={() => {console.log('got clicked')}} onMouseEnter={() => {console.log('got mouse over')}}>
            <ListItemText primary={props.diseaseName}/>
            <FontAwesomeIcon icon={Star} className={'star-icon'}/>
        </ListItem>
    )
}

export default DiseaseListItem;

