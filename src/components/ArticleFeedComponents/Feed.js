import React from "react";
import FeedInformation from "./FeedInformation";
import Paper from "@material-ui/core/Paper";
import {makeStyles} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Box from '@material-ui/core/Box';
import ReactReadMoreReadLess from "react-read-more-read-less";
import ArticleStats from "./ArticleStats";
import {useDispatch} from "react-redux";
import {setSelectedArticle} from "../../global_state/actions/articlesActions";

const useStyle = makeStyles((theme) => ({
    paper: {
        marginBottom: '20px',
        padding: '15px',
    },
    title: {
        fontSize: '1.6rem',
        '&:hover, &:focus': {
            cursor: 'pointer',
        },
    },
    readMoreStyle: {
        opacity: '0.7',
        fontSize: '85%',
        color: theme.palette.type === "dark" && '#bbbbbb',
        '&:hover, &:focus': {
            cursor: 'pointer',
            color: theme.palette.type === "light" ? '#007bff' : "#ffffff",
        },
    },
    summaryBox: {
        width: '90%',
        fontSize: '1.15rem',
    },
    imgStyle: {
        '&:hover, &:focus': {
            cursor: 'pointer',
        },
    },
}));


const altTextPreFix = "Disease and Research News - ";

const Feed = (props) => {
    const {
        article,
    } = props;
    const {img, title, summary, diseases, website, timeToRead, publishedDate,likes,comments} = article;
    const classes = useStyle();
    const dispatch = useDispatch();

    const feedHasBeenClicked = () => {
        dispatch(setSelectedArticle(article));
    };

    return (
        <Paper variant={"elevation"}
               className={classes.paper}
               square
               elevation={5}>
            <Box display={'flex'} flexDirection={'row'}>

                {/*Img*/}
                <Box onClick={feedHasBeenClicked} className={classes.imgStyle}>
                    <img src={img}
                         alt={altTextPreFix + title}
                         className={'mini-feed-image'}/>
                </Box>

                {/*Title*/}
                <Box className={'ml-3 w-100'} display={'flex'} flexDirection={'column'}>
                    <Box flexGrow={1} onClick={feedHasBeenClicked}>
                        <Typography variant={'h5'}
                                    component={'h4'}
                                    className={classes.title}>
                            {title}</Typography>
                        <ArticleStats
                            likes={likes}
                            comments={comments}
                        />
                    </Box>

                    {/*Summary*/}
                    <Box className={classes.summaryBox}>
                        <ReactReadMoreReadLess
                            charLimit={75}
                            readMoreClassName={classes.readMoreStyle}
                            readLessClassName={classes.readMoreStyle}>
                            {summary}
                        </ReactReadMoreReadLess>
                    </Box>
                    <Box>
                        <FeedInformation
                            diseases={diseases}
                            website={website}
                            publishedDate={publishedDate}
                            timeToRead={timeToRead}
                        />
                    </Box>
                </Box>
            </Box>
        </Paper>
    )
};

export default Feed;