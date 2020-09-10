import React from "react";
import {ListSubheader} from "@material-ui/core";
import DiseaseListItem from "./DiseaseListItem";


function DiseaseList(props) {
    return (
        <div>
            <ListSubheader>{props.subheader}</ListSubheader>
            {props.diseases.map((text, index) => (
                <DiseaseListItem key={index} diseaseName={text + " " + index} followed={props.followed} />
            ))}
        </div>
    )
}

export default DiseaseList;

