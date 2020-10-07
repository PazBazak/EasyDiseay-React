import React, {useContext, useEffect, useState} from "react";
import List from "@material-ui/core/List";
import {makeStyles} from '@material-ui/core/styles';
import DiseaseList from "./DiseaseList";
import SearchBar from "./SearchBar";
import DiseasesContext from "../../contexts/diseasesContext/diseasesContext";

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


function DiseasesLists() {
    const classes = useStyles();
    const [, forceUpdate] = useState();
    const diseasesContext = useContext(DiseasesContext);
    const [searchInputText, setSearchInputText] = useState('');
    const {diseases, fetchDiseases} = diseasesContext;

    const handleFollow = diseaseIndex => {
        diseases[diseaseIndex].isFollowing = !diseases[diseaseIndex].isFollowing;
        forceUpdate({});
    };

    useEffect(() => {
        fetchDiseases();
    }, []);

    return (
        <List className={classes.list}>
            <div className={classes.container}>
                <SearchBar setSearchInputText={setSearchInputText}/>
                <DiseaseList
                    searchInputText={''}
                    messageIfEmpty={''}
                    diseases={diseases}
                    subheader={process.env.REACT_APP_FOLLOWED_DISEASES_SUBHEADER}
                    isFollowing={true}
                    handleFollow={handleFollow}/>
                <DiseaseList
                    searchInputText={searchInputText}
                    messageIfEmpty={process.env.REACT_APP_NO_MATCHING_DISEASES_MESSAGE}
                    diseases={diseases}
                    subheader={process.env.REACT_APP_ALL_DISEASES_SUBHEADER}
                    isFollowing={false}
                    handleFollow={handleFollow}/>
            </div>
        </List>
    )
}

export default DiseasesLists;

