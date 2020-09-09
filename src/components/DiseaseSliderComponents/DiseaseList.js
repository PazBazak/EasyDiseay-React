import React from "react";
import List from "@material-ui/core/List";
import DiseaseListItem from "./DiseaseListItem";
import {ListSubheader} from "@material-ui/core";
import {makeStyles} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import FollowedDiseasesList from "./FollowedDiseasesList";
import AllDiseasesList from "./AllDiseasesList";

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

                <div className={'p-3'}>
                    <TextField label="Search" variant="filled" />
                </div>

                <FollowedDiseasesList />
                <AllDiseasesList />
            </div>
        </List>
    )
}

export default DiseaseList;

