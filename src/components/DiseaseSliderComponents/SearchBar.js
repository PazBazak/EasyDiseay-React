import React from "react";
import TextField from "@material-ui/core/TextField";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginRight: theme.spacing.unit + 10,
        width: 220,
        minWidth: 50,
    },

    cssLabel: {
        color: 'white'
    },

    cssOutlinedInput: {
        '&$cssFocused $notchedOutline': {
            borderColor: `white!important`,
        },
        color: 'white',
    },

    notchedOutline: {
        borderColor: 'white !important'
    },
}));

function SearchBar(props) {
    const {setSearchInputText} = props;

    const handleSearchInput = async (object) => {
        setSearchInputText(object.target.value);
    };

    return (
        <TextField
            placeholder="Search..."
            type="search"
            onChange={handleSearchInput}
            variant="filled"/>
    )
}

function SearchBarAppBar(props) {
    const classes = useStyles();
    const {setSearchInputText} = props;

    // To make it function u need to add 'OnChange' in the TextField
    const handleSearchInput = async (object) => {
        setSearchInputText(object.target.value);
    };

    return (
        <TextField
            type="search"
            placeholder='Search...'
            size="small"
            variant="outlined"
            className={classes.textField}
            InputLabelProps={{
                classes: {
                    root: classes.cssLabel,
                },
            }}
            InputProps={{
                classes: {
                    root: classes.cssOutlinedInput,
                    notchedOutline: classes.notchedOutline,
                },
            }}/>
    )
}

export {SearchBar, SearchBarAppBar};

