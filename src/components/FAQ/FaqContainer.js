import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import FaqBox from "./FaqBox";

const useStyle = makeStyles((theme) => ({
    container: {
        backgroundColor: '#add5f0',
        padding: '56px',
    },
    title: {}
}));

const FaqContainer = () => {
    const classes = useStyle();

    return (
        <Container className={classes.container}>
            <Typography
                className={classes.title}
                variant={'h5'}
            >
                Frequently Asked Questions
            </Typography>
            <Grid container>
                <Grid item xs={4}>
                    <FaqBox
                        title={'General'}
                        questions={[
                            'Question 1',
                            'Question 2',
                            'Question 3',
                            'Question 4',
                        ]}/>
                </Grid>
                <Grid item xs={4}>
                    <FaqBox
                        title={'General'}
                        questions={[
                            'Question 1',
                            'Question 2',
                            'Question 3',
                            'Question 4',
                        ]}/>
                </Grid>
                <Grid item xs={4}>
                    <FaqBox
                        title={'General'}
                        questions={[
                            'Question 1',
                            'Question 2',
                            'Question 3',
                            'Question 4',
                        ]}/>
                </Grid>
                <Grid item xs={4}>
                    <FaqBox
                        title={'General'}
                        questions={[
                            'Question 1',
                            'Question 2',
                            'Question 3',
                            'Question 4',
                        ]}/>
                </Grid>
            </Grid>
        </Container>
    );
};

export default FaqContainer;
