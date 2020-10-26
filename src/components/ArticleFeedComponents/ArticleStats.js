import React, {Fragment} from "react";
import {makeStyles} from "@material-ui/core/styles";
import CommentIcon from '@material-ui/icons/Comment';
import FavoriteIcon from '@material-ui/icons/Favorite';
import {Box} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";

const useStyle = makeStyles((theme) => ({
    comment: {
        color: '#1e88e5',
    },
    like: {
        color: '#ff4b6f',
    },
    likeText: {
        fontSize: '15px',
        marginLeft: '2px',
        color: '#ff4b6f',
        fontWeight: '600',
        marginRight: '14px',
    },
    commentText: {
        fontSize: '15px',
        marginLeft: '2px',
        color: '#1e88e5',
        fontWeight: '600',
        marginRight: '14px',
    },
}));

const ArticleStats = ({likes, comments}) => {
    const classes = useStyle();
    const hasLike = likes > 0;
    const hasComments = comments > 0;

    return (
        <Box>
            {hasLike &&
            <Fragment>
                <FavoriteIcon
                    fontSize={"small"}
                    className={classes.like}
                />
                <Typography
                    component={'span'}
                    className={classes.likeText}
                >
                    {likes}
                </Typography>
            </Fragment>}
            {hasComments &&
            <Fragment>
                <CommentIcon
                    fontSize={"small"}
                    className={classes.comment}
                />
                <Typography
                    component={'span'}
                    className={classes.commentText}
                >
                    {comments}
                </Typography>
            </Fragment>}
        </Box>
    )
};

export default ArticleStats;