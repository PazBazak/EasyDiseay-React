import React, {Fragment} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Typography from "@material-ui/core/Typography";

const useStyle = makeStyles((theme) => ({}));

const FaqBox = () => {
    const classes = useStyle();

    return (
        <Fragment>
            <Typography>General</Typography>
        </Fragment>
    );
};

export default FaqBox;
