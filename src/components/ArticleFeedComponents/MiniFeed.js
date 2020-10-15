import React, {useState} from "react";
import FeedInformation from "./FeedInformation";
import Paper from "@material-ui/core/Paper";
import {makeStyles} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Box from '@material-ui/core/Box';
import clsx from 'clsx';
import Link from "@material-ui/core/Link";
import {Link as RouterLink} from "react-router-dom";
import Truncate from "react-truncate";

const useStyle = makeStyles((theme) => ({
    paper: {
        marginBottom: '20px',
        padding: '15px',
    },
    title: {
        fontSize: '1.6rem',
    },
    readMoreStyle: {
        opacity: '0.7',
        fontSize: '85%',
        '&:hover, &:focus': {
            cursor: 'pointer',
        },
    },
    summary: {
        fontSize: '1.15rem',
    },
    summaryBox: {
        width: '85%',
    },
}));


const altTextPreFix = "Disease and Research News - ";

const MiniFeed = (props) => {
    const classes = useStyle();
    const [isBig, setIsBig] = useState(false);

    const {
        id,
        title,
        diseases,
        summary,
        img,
        website,
        timeToRead,
        publishedDate,
        isMinimizedView
    } = props;

    const ellipsisContinue = (
        <span>...<Typography component={'span'} color="inherit" className={classes.readMoreStyle}> Read more</Typography></span>
    );

    return (
        <Paper variant={"elevation"}
               className={classes.paper}
               square
               elevation={5}
        >
            <Box display={'flex'} flexDirection={'row'}>
                <Box>
                    <img src={img}
                         alt={altTextPreFix + title}
                         className={'mini-feed-image'}/>
                </Box>
                <Box className={'ml-3 w-100'} display={'flex'} flexDirection={'column'}>
                    <Box flexGrow={1}>
                        <Typography variant={'h4'}
                                    component={'h3'}
                                    className={clsx({
                                        [classes.title]: isMinimizedView
                                    })}
                        >{title}</Typography>
                    </Box>
                    <Box className={classes.summaryBox}>
                        <Truncate lines={isBig ? -1 : 1}
                                  ellipsis={ellipsisContinue}
                                  className={classes.summary}>{summary}
                        </Truncate>
                    </Box>
                    <Box>
                        <FeedInformation
                            diseases={diseases}
                            website={website}
                            publishedDate={publishedDate}
                            timeToRead={timeToRead}/>
                    </Box>
                </Box>
            </Box>
        </Paper>
    )
};

export default MiniFeed;

