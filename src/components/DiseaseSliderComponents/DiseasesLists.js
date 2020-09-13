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
    console.log(followedDiseases);

    const followDisease = (disease) => {
        if (!followedDiseases.includes(disease)) {
            setFollowedDiseases([...followedDiseases, disease])
        }
    };

    const unFollowDisease = (disease) => {
        const diseaseIndex = followedDiseases.indexOf(disease);
        const filtered = followedDiseases.filter((disease, index) => index !== diseaseIndex && disease);
        console.log(disease);
        console.log(diseaseIndex);
        console.log(followedDiseases);
        console.log(filtered);

        setFollowedDiseases(filtered);
    };

    useEffect(() => {
        fetchDiseases().then(diseases => setDiseases(diseases));
    }, []);

    return (
        <List className={classes.list}>
            <div className={classes.container}>
                <SearchBox/>
                <DiseaseList
                    diseases={followedDiseases}
                    followed={true}
                    subheader={'Followed'}
                    unFollowDisease={unFollowDisease}/>
                <DiseaseList
                    diseases={diseases}
                    followed={false}
                    subheader={'Diseases'}
                    followDisease={followDisease}/>
            </div>
        </List>
    )
}

export default DiseasesLists;

