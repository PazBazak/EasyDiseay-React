import React from "react";
import List from "@material-ui/core/List";
import DiseaseListItem from "./DiseaseListItem";

function DiseaseList() {
    return (
        <div>
            <List>
                {['Disease', 'Disease', 'Disease', 'Disease', 'Disease', 'Disease'].map((text, index) => (
                    <DiseaseListItem key={index} diseaseName={text + " " + index}/>
                ))}
            </List>
        </div>
    )
}

export default DiseaseList;

