import React from "react";
import {ListSubheader} from "@material-ui/core";
import DiseaseListItem from "./DiseaseListItem";


function DiseaseList(props) {
    const {diseases, subheader, id, followDisease, unFollowDisease, followed} = props;

    const getDiseases = () => {
        return diseases.filter((disease, index) => {
            disease.diseaseIndex = index;
            return disease.isFollowing === followed
        })
    };

    return (
        <div>
            <ListSubheader>{subheader}</ListSubheader>
            {getDiseases().map((disease) => (
                <DiseaseListItem key={id}
                                 diseaseIndex={disease.diseaseIndex}
                                 disease={disease}
                                 followDisease={followDisease}
                                 unFollowDisease={unFollowDisease}/>
            ))}
        </div>
    )
}

export default DiseaseList;

