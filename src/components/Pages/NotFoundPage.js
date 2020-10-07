import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {ThemeProvider} from '@material-ui/styles';
import Header from "../HeaderComponents/Header";
import theme from '../../Themes/mainTheme'


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
        <ThemeProvider theme={theme}>
            <Header/>
            <div className={classes.container}>
                <h2 className={classes.text}>Error 404!</h2>
                <h2 className={classes.text}>Wrong Page!</h2>
            </div>
        </ThemeProvider>
    );
}

export default NotFoundPage;
