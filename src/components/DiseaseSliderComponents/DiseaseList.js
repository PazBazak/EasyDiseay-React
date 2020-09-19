import React from "react";
import {ListSubheader} from "@material-ui/core";
import DiseaseListItem from "./DiseaseListItem";


function DiseaseList(props) {
    const {diseases, subheader, id, followDisease, unFollowDisease} = props;
    return (
        <div>
            <ListSubheader>{subheader}</ListSubheader>
            {diseases.map((disease) => (
                <DiseaseListItem key={id}
                                 disease={disease}
                                 followDisease={followDisease}
                                 unFollowDisease={unFollowDisease}/>
            ))}
        </div>
    )
}

export default DiseaseList;

