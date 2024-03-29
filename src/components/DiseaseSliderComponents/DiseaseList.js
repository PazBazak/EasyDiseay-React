import React, {useEffect, useState} from "react";
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
    notFoundMessageStyle: {
        color: "grey",
        paddingLeft: 15,
    },
    subheader: {
        backgroundColor: theme.palette.background.paper
    },
}));

function DiseaseList(props) {
    const {searchInputText, messageIfEmpty, subheader, handleFollow, isFollowing, diseases} = props;
    const classes = useStyles();
    const [haveDiseasesBeenFetched, setHaveDiseasesBeenFetched] = useState(false);

    /**
     * Checks the flag of the prop isFollowing, it's filtering only the relevant diseases and adding indexes to the
     * objects so it can be used later on.
     * */
    const handleDiseases = () => {
        return diseases.filter((disease, index) => {
            disease.diseaseIndex = index;
            return disease.isFollowing === isFollowing && disease.name.toLowerCase().includes(searchInputText.toLowerCase())
        })
    };


    useEffect(() => {
        setHaveDiseasesBeenFetched(diseases.length > 0);
    }, [diseases]);

    const diseasesList = handleDiseases().map((disease) => (
        <DiseaseListItem key={disease.id}
                         diseaseIndex={disease.diseaseIndex}
                         disease={disease}
                         handleFollow={handleFollow}/>));

    return (
        <div>
            <ListSubheader className={classes.subheader}>{subheader}</ListSubheader>
            {diseasesList}
            {diseasesList.length === 0 && messageIfEmpty !== '' && haveDiseasesBeenFetched ?
                <div className={classes.notFoundMessageStyle}>
                    {messageIfEmpty}
                </div>
                : null}
        </div>
    )
}

export default DiseaseList;

