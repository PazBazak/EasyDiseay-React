import React, {Fragment} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';


const useStyle = makeStyles((theme) => ({
    base: {
        backgroundColor: '#fff',
        borderRadius: '25px',
        width: "45%",
        height: "48px",
    },
    input: {
        color: '#858585',
        fontSize: '1.4rem',
        paddingLeft: '25px',
    },
}));

const FaqSearchBar = () => {
    const classes = useStyle();

    return (
        <Fragment>
            <InputBase
                className={classes.base}
                placeholder="Type keywords to find answers"
                inputProps={
                    {
                        "aria-label": 'Type keywords to find answers',
                        className: classes.input
                    }
                }
            />
        </Fragment>
    );
};

export default FaqSearchBar;
