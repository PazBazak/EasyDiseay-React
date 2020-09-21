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
        "&::-webkit-scrollbar": {
            display: 'none'
        },
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
        const fetchedDiseases = await fetch(process.env.REACT_APP_DISEASES_API_URL, {
            method: 'GET'
        });
        return await fetchedDiseases.json();
    } catch (e) {
        return preMadeDiseases;
    }
};

function DiseasesLists() {
    const classes = useStyles();
    const [diseases, setDiseases] = useState([]);
    const [, forceUpdate] = useState();

    const handleFollow = diseaseIndex => {
        diseases[diseaseIndex].isFollowing = !diseases[diseaseIndex].isFollowing;
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
                    isFollowing={true}
                    handleFollow={handleFollow}/>
                <DiseaseList
                    diseases={diseases}
                    subheader={'Diseases'}
                    isFollowing={false}
                    handleFollow={handleFollow}/>
            </div>
        </List>
    )
}

export default DiseasesLists;

