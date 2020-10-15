import React from "react";
import TextField from "@material-ui/core/TextField";
import {makeStyles} from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";
import InputAdornment from "@material-ui/core/InputAdornment";

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
        color: 'white !important',
    },

    cssOutlinedInput: {
        '&$cssFocused $notchedOutline': {
            borderColor: `white!important`,
        },
        color: 'white !important',
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
            InputProps={{
                startAdornment: (
                    <InputAdornment position="start">
                        <SearchIcon/>
                    </InputAdornment>
                )
            }}
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
            id={'Search'}
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
                startAdornment: (
                    <InputAdornment position="start">
                        <SearchIcon/>
                    </InputAdornment>
                ),
                classes: {
                    root: classes.cssOutlinedInput,
                    notchedOutline: classes.notchedOutline,
                },
            }}/>
    )
}

export {SearchBar, SearchBarAppBar};

