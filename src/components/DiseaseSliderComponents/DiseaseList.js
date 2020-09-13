import React from "react";
import {ListSubheader} from "@material-ui/core";
import DiseaseListItem from "./DiseaseListItem";


function DiseaseList(props) {
    return (
        <div>
            <ListSubheader>{props.subheader}</ListSubheader>
            {props.diseases.map((disease) => (
                <DiseaseListItem key={disease.id}
                                 disease={disease}
                                 followed={props.followed}
                                 followDisease={props.followDisease}
                                 unFollowDisease={props.unFollowDisease}/>
            ))}
        </div>
    )
}

export default DiseaseList;

