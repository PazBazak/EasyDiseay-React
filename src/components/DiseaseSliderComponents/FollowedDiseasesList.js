import React from "react";
import {ListSubheader} from "@material-ui/core";
import DiseaseListItem from "./DiseaseListItem";


function FollowedDiseasesList() {
    return (
        <div>
            <ListSubheader>Followed</ListSubheader>
            {['Disease'].map((text, index) => (
                <DiseaseListItem key={index} diseaseName={text + " " + index} followed={true} />
            ))}
        </div>
    )
}

export default FollowedDiseasesList;

