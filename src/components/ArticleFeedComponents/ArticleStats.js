import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import CommentIcon from '@material-ui/icons/Comment';
import FavoriteIcon from '@material-ui/icons/Favorite';
import {useSelector} from "react-redux";
import {Box} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";

const useStyle = makeStyles((theme) => ({
    comment: {
        marginLeft: '14px',
        color: '#1e88e5',
    },
    like: {
        color: '#ff4b6f',
    },
    likeText: {
        fontSize: '15px',
        marginLeft: '2px',
        color: '#ff4b6f',
        fontWeight: '600'
    },
}));

const ArticleStats = ({likes}) => {
    const classes = useStyle();

    return (
        <Box>
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
            <CommentIcon
                fontSize={"small"}
                className={classes.comment}
            />
        </Box>
    )
};

export default ArticleStats;