import React, {Fragment} from 'react';
import {makeStyles} from '@material-ui/core/styles';


const useStyle = makeStyles((theme) => ({
    container: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        margin: "-72px 0 0 -23px",
    },
    text: {
        textAlign: 'center',
    }
}));

function NotFoundPage() {
    const classes = useStyle();

    return (
        <Fragment>
            <div className={classes.container}>
                <h2 className={classes.text}>Error 404!</h2>
                <h2 className={classes.text}>Wrong Page!</h2>
            </div>
        </Fragment>
    );
}

export default NotFoundPage;
