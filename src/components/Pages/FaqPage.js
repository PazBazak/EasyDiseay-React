import React, {Fragment} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Header from "../HeaderComponents/Header";
import FaqHeader from "../FAQ/FaqHeader";

const useStyle = makeStyles((theme) => ({
    drawerHeader: {
        minHeight: '64px',
    },
    content: {
        minHeight: '-webkit-fill-available;',
        flexGrow: 1,
        paddingBottom: '0',
    },
}));

function FaqPage() {
    const classes = useStyle();

    return (
        <Fragment>
            <Header/>
            <main className={classes.content}>
                <div className={classes.drawerHeader}/>
                <FaqHeader />
            </main>
        </Fragment>
    );
}

export default FaqPage;
