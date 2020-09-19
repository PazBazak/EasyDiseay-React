import React from "react";
import {ListSubheader} from "@material-ui/core";
import DiseaseListItem from "./DiseaseListItem";


function DiseaseList(props) {
    const {diseases, subheader, id, handleFollow, isFollowing} = props;

    /**
     * Checks the flag of the prop isFollowing, it's filtering only the relevant diseases and adding indexes to the
     * objects so it can be used later on.
     * */
    const handleDiseases = () => {
        return diseases.filter((disease, index) => {
            disease.diseaseIndex = index;
            return disease.isFollowing === isFollowing
        })
    };

    return (
        <div>
            <ListSubheader>{subheader}</ListSubheader>
            {handleDiseases().map((disease) => (
                <DiseaseListItem key={id}
                                 diseaseIndex={disease.diseaseIndex}
                                 disease={disease}
                                 handleFollow={handleFollow}/>
            ))}
        </div>
    )
}

export default DiseaseList;

