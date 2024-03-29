import React, {useEffect} from "react";
import {BoxLoading} from "../utils/LoadingsTypes";
import Feed from "./Feed";
import {useDispatch, useSelector} from "react-redux";
import {fetchArticles, fetchArticlesForDisease} from "../../global_state/actions/articlesActions";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    articleFeed: {
        overflow: 'auto',
        maxHeight: '125vh',
        "&::-webkit-scrollbar": {
            display: 'none'
        },
    },
}));


function ArticleFeed({diseaseId}) {
    const dispatch = useDispatch();
    const articles = useSelector(state => state.articleState.articles);
    const classes = useStyles();

    useEffect(() => {
        if (diseaseId === undefined) {
            dispatch(fetchArticles());
        } else {
            dispatch(fetchArticlesForDisease(diseaseId, 10));
        }
        // eslint-disable-next-line
    }, [diseaseId]);


    return (
        <div className={classes.articleFeed + ' col'}>
            {articles.length > 0 ? articles.map(article =>
                    <Feed
                        key={article.id}
                        article={article}/>)
                :
                <BoxLoading/>}
        </div>
    )
}

export default ArticleFeed;

