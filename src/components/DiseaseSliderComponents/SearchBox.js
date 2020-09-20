import React from "react";
import TextField from "@material-ui/core/TextField";


function SearchBox() {
    return (
        <div className={'p-3'}>
            <TextField label="Search" variant="filled"/>
        </div>
    )
}

export default SearchBox;

