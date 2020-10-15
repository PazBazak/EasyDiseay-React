import React, {useContext, useEffect, useState} from "react";
import List from "@material-ui/core/List";
import {makeStyles} from '@material-ui/core/styles';
import DiseaseList from "./DiseaseList";
import {SearchBar} from "./SearchBar";
import {ALL_DISEASES_SUBHEADER, FOLLOWED_DISEASES_SUBHEADER, NO_MATCHING_DISEASES_MESSAGE} from '../utils/Constants'
import DiseasesContext from "../../contexts/diseasesContext/diseasesContext";
import FilterTabs from "./FilterTabs";

const useStyles = makeStyles((theme) => ({
    list: {
        width: '100%',
        backgroundColor: theme.palette.background.paper,
        position: 'relative',
        overflow: 'auto',
        padding: 0,
        "&::-webkit-scrollbar": {
            display: 'none'
        },
    },
    container: {
        backgroundColor: 'inherit',
        padding: 0,
        paddingTop: '20px'
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
                <FilterTabs/>
                <div className={'p-3'}>
                    <SearchBar setSearchInputText={setSearchInputText}/>
                </div>
                <DiseaseList
                    searchInputText={''}
                    messageIfEmpty={''}
                    diseases={diseases}
                    subheader={FOLLOWED_DISEASES_SUBHEADER}
                    isFollowing={true}
                    handleFollow={handleFollow}/>
                <DiseaseList
                    searchInputText={searchInputText}
                    messageIfEmpty={NO_MATCHING_DISEASES_MESSAGE}
                    diseases={diseases}
                    subheader={ALL_DISEASES_SUBHEADER}
                    isFollowing={false}
                    handleFollow={handleFollow}/>
            </div>
        </List>
    )
}

export default DiseasesLists;

