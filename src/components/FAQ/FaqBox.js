import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Typography from "@material-ui/core/Typography";

const useStyle = makeStyles((theme) => ({
    title: {
        color: '#0b283e',
        marginBottom: theme.spacing(3),
        marginTop: theme.spacing(5),
    },
    question: {
        marginBottom: theme.spacing(1),
    }
}));


const FaqQuestion = ({question}) => {
    const classes = useStyle();
    return <Typography variant={"body1"} className={classes.question}>{question}</Typography>
};


const FaqBox = ({title, questions}) => {
    const classes = useStyle();

    return (
        <div>
            <Typography variant={"h5"} className={classes.title}>{title}</Typography>
            {questions.map(question => <FaqQuestion question={question}/>)}
        </div>
    );
};

export default FaqBox;
