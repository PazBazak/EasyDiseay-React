import React, {useEffect} from "react";
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
        "&::-webkit-scrollbar": {
            display: 'none'
        },
    },
    container: {
        backgroundColor: 'inherit',
        padding: 0,
    },
}));

function DiseaseList(props) {
    const {searchInputText, diseases, subheader, id, handleFollow, isFollowing} = props;

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

    return (
        <div>
            <ListSubheader style={{backgroundColor: 'white'}}>{subheader}</ListSubheader>
            {handleDiseases().map((disease) => (
                <DiseaseListItem key={id}
                                 diseaseIndex={disease.diseaseIndex}
                                 disease={disease}
                                 handleFollow={handleFollow}/>
            ))}
        </div>
    )
}

export default DiseaseList;

