import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as Star} from "@fortawesome/free-regular-svg-icons";

function DiseaseList() {
    return (
        <div>
            <List>
                {['Disease', 'Disease', 'Disease', 'Disease', 'Disease', 'Disease'].map((text, index) => (
                    <ListItem button key={index}>
                        <ListItemText primary={text + " " + index}/>
                        <FontAwesomeIcon icon={Star} />
                    </ListItem>
                ))}
            </List>
        </div>
    )
}

export default DiseaseList;

