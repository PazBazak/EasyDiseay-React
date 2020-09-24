import React from "react";
import FeedInformation from "./FeedInformation";
import FeedBody from "./FeedBody";
import Paper from "@material-ui/core/Paper";
import {makeStyles} from "@material-ui/core/styles";

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
        <Paper variant={"outlined"} className={classes.paper}>
            <div className={''}>
                <h2>{title}</h2>
                <FeedInformation diseases={diseases}
                                 website={website}
                                 publishedDate={publishedDate}
                                 timeToRead={timeToRead}/>
                <FeedBody summary={summary} img={img}/>
            </div>
        </Paper>
    )
}

export default Feed;

