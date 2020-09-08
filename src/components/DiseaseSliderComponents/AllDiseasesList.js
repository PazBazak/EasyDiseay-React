import React from "react";
import {ListSubheader} from "@material-ui/core";
import DiseaseListItem from "./DiseaseListItem";


function AllDiseasesList() {
    return (
        <div>
            <ListSubheader>Diseases</ListSubheader>
            {['Disease', 'Disease', 'Disease', 'Disease', 'Disease', 'Disease', 'Disease', 'Disease', 'Disease', 'Disease', 'Disease', 'Disease', 'Disease'].map((text, index) => (
                <DiseaseListItem key={index} diseaseName={text + " " + index}/>
            ))}
        </div>
    )
}

export default AllDiseasesList;

