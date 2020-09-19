import React, {useEffect, useState} from "react";
import List from "@material-ui/core/List";
import {makeStyles} from '@material-ui/core/styles';
import DiseaseList from "./DiseaseList";
import SearchBox from "./SearchBox";

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

const preMadeDiseases = [
    {
        name: "Crohn's' disease",
        id: 0
    },
    {
        name: "Colitis",
        id: 1
    },
    {
        name: "Coronavirus",
        id: 2
    },
    {
        name: "Anal cancer",
        id: 3
    },
    {
        name: "Something dermatitis",
        id: 4
    },
];

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
    const  [,forceUpdate]= useState();

    const followDisease = diseaseIndex => {
        diseases[diseaseIndex].isFollowing = true;
        forceUpdate({});
    };

    const unFollowDisease = diseaseIndex => {
        diseases[diseaseIndex].isFollowing = false;
        forceUpdate({});
    };

    useEffect(() => {
        fetchDiseases()
            .then(diseases => {
                diseases.forEach(disease => disease.isFollowing = false);
                return diseases
            })
            .then(diseases => setDiseases(diseases))
    }, []);

    return (
        <List className={classes.list}>
            <div className={classes.container}>
                <SearchBox/>
                <DiseaseList
                    diseases={diseases}
                    subheader={'Followed'}
                    followed={true}
                    unFollowDisease={unFollowDisease}
                    followDisease={followDisease}/>
                <DiseaseList
                    diseases={diseases}
                    subheader={'Diseases'}
                    followed={false}
                    unFollowDisease={unFollowDisease}
                    followDisease={followDisease}/>
            </div>
        </List>
    )
}

export default DiseasesLists;

