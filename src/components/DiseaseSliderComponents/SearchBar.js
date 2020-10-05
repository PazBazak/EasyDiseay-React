import React from "react";
import TextField from "@material-ui/core/TextField";


function SearchBar(props) {
    const {setSearchInputText} = props;

    const handleSearchInput = async (object) => {
        setSearchInputText(object.target.value);
    };

    return (
        <div className={'p-3'}>
            <TextField
                label="Search"
                type="search"
                onChange={handleSearchInput}
                variant="filled"/>
        </div>
    )
}

export default SearchBar;

