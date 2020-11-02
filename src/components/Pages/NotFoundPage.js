import React, {Fragment} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Header from "../HeaderComponents/Header";


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
            <Header/>
            <div className={classes.container}>
                <h2 className={classes.text}>Error 404!</h2>
                <h2 className={classes.text}>Wrong Page!</h2>
            </div>
        </Fragment>
    );
}

export default NotFoundPage;
