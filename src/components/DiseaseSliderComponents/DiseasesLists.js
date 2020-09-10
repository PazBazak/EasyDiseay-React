import React from "react";
import List from "@material-ui/core/List";
import {makeStyles} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import DiseaseList from "./DiseaseList";

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

function DiseasesLists() {
    const classes = useStyles();

    return (
        <List className={classes.list}>
            <div className={classes.container}>

                <div className={'p-3'}>
                    <TextField label="Search" variant="filled"/>
                </div>

                <DiseaseList
                    diseases={['Disease', 'Disease']}
                    followed={true}
                    subheader={'Followed'}/>
                <DiseaseList
                    diseases={['Disease', 'Disease', 'Disease', 'Disease', 'Disease', 'Disease', 'Disease', 'Disease', 'Disease', 'Disease', 'Disease']}
                    followed={false}
                    subheader={'Diseases'}/>
            </div>
        </List>
    )
}

export default DiseasesLists;

