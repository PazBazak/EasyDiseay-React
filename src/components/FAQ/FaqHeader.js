import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Typography from "@material-ui/core/Typography";
import FaqSearchBar from "../FAQ/FaqSearchBar";
import Box from "@material-ui/core/Box"

const useStyle = makeStyles((theme) => ({
    faqHeader: {
        backgroundColor: '#71c2ff',
        padding: theme.spacing(5),
        textAlign: 'center'
    },
    title: {
        marginBottom: theme.spacing(4)
    },
    subTitle: {
        marginTop: theme.spacing(4)
    }
}));

const FaqHeader = () => {
    const classes = useStyle();

    return (
        <Box className={classes.faqHeader}>
            <Typography variant={'h4'}
                        component={'h3'}
                        align={'center'}
                        className={classes.title}
            >
                How can we help you?
            </Typography>
            <FaqSearchBar/>
            <Typography variant={'body1'}
                        align={'center'}
                        className={classes.subTitle}
            >
                You can also browse the topics below to find what you are looking for.
            </Typography>
        </Box>
    );
};

export default FaqHeader;
