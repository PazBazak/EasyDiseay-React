import React, {useState, useEffect} from "react";
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

const preMadeDiseases = {};

const fetchDiseases = async () => {
    try {
        const diseases = await fetch('http://127.0.0.1:8000/api/diseases/', {
            method: 'GET'
        });
        return await diseases.json();
    } catch (e) {
        return preMadeDiseases;
    }
};

function DiseasesLists() {
    const classes = useStyles();
    const [diseases, setDiseases] = useState([]);
    const [followedDiseases, setFollowedDiseases] = useState([]);

    useEffect(() => {
        fetchDiseases().then(diseases => setDiseases(diseases));
    }, []);

    return (
        <List className={classes.list}>
            <div className={classes.container}>

                <div className={'p-3'}>
                    <TextField label="Search" variant="filled"/>
                </div>

                <DiseaseList
                    diseases={followedDiseases}
                    followed={true}
                    subheader={'Followed'}/>
                <DiseaseList
                    diseases={diseases}
                    followed={false}
                    subheader={'Diseases'}/>
            </div>
        </List>
    )
}

export default DiseasesLists;

