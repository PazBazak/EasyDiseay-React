import React from "react";
import FeedInformation from "./FeedInformation";
import Paper from "@material-ui/core/Paper";
import {makeStyles} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Box from '@material-ui/core/Box';


const useStyle = makeStyles((theme) => ({
    paper: {
        marginBottom: '20px',
        padding: '15px',
    },
}));

const altTextPreFix = "Disease and Research News - ";

const MiniFeed = (props) => {
    const classes = useStyle();
    const {
        id,
        title,
        diseases,
        summary,
        img,
        website,
        timeToRead,
        publishedDate
    } = props;

    return (
        <Paper variant={"elevation"}
               className={classes.paper}
               square
               elevation={5}>
            <Box display={'flex'} flexDirection={'row'}>
                <Box>
                    <img src={img}
                         alt={altTextPreFix + title}
                         className={'mini-feed-image'}/>
                </Box>
                <Box className={'ml-3 w-100'} display={'flex'} flexDirection={'column'}>
                    <Box flexGrow={1}>
                        <Typography variant={'h4'} component={'h3'}>{title}</Typography>
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

