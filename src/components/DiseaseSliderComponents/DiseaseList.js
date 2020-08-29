import React from "react";
import List from "@material-ui/core/List";
import DiseaseListItem from "./DiseaseListItem";
import {ListSubheader} from "@material-ui/core";
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    list: {
        width: '100%',
        backgroundColor: theme.palette.background.paper,
        position: 'relative',
        overflow: 'auto',
        padding: '0',
    },
    container: {
        backgroundColor: 'inherit',
        padding: 0,
    },
}));

function DiseaseList() {
    const classes = useStyles();

    return (
        <List className={classes.list}>
            <div className={classes.container}>
                <ListSubheader>Diseases</ListSubheader>
                {['Disease', 'Disease', 'Disease', 'Disease', 'Disease', 'Disease', 'Disease', 'Disease', 'Disease', 'Disease', 'Disease', 'Disease', 'Disease', 'Disease', 'Disease'].map((text, index) => (
                    <DiseaseListItem key={index} diseaseName={text + " " + index}/>
                ))}
                <ListSubheader>Niggers</ListSubheader>
                {['Disease', 'Disease', 'Disease', 'Disease', 'Disease', 'Disease', 'Disease', 'Disease', 'Disease', 'Disease', 'Disease', 'Disease', 'Disease', 'Disease', 'Disease'].map((text, index) => (
                    <DiseaseListItem key={index} diseaseName={text + " " + index}/>
                ))}
            </div>
        </List>
    )
}

export default DiseaseList;

