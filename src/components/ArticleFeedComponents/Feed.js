import React from "react";
import FeedInformation from "./FeedInformation";
import FeedBody from "./FeedBody";
import Paper from "@material-ui/core/Paper";
import {makeStyles} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const useStyle = makeStyles((theme) => ({
    paper: {
        marginBottom: '20px',
        padding: '15px',
    }
}));


function Feed(props) {
    const classes = useStyle();
    const {title, diseases, summary, img, website, timeToRead, publishedDate} = props;

    return (
        <Paper variant={"elevation"}
               className={classes.paper}
               square
               elevation={5}>
            <Typography variant={'h4'} component={'h3'}>{title}</Typography>
            <FeedInformation diseases={diseases}
                             website={website}
                             publishedDate={publishedDate}
                             timeToRead={timeToRead}/>
            <FeedBody summary={summary} img={img}/>
        </Paper>
    )
}

export default Feed;

