import React, {Fragment} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';


const useStyle = makeStyles((theme) => ({
    input: {
        flex: 1,
    },
}));

function FaqSearchBar() {
    const classes = useStyle();

    return (
        <Fragment>
            <InputBase
                className={classes.input}
                placeholder="Type keywords to find answers"
                inputProps={{'aria-label': 'Type keywords to find answers'}}
            />
        </Fragment>
    );
}

export default FaqSearchBar;
