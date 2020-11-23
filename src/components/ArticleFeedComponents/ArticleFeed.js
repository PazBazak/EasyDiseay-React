import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchArticles, fetchArticlesForDisease} from "../../global_state/actions/articlesActions";
import {makeStyles} from "@material-ui/core/styles";
import InfiniteScroll from "react-infinite-scroll-component";
import {BoxLoading} from "../utils/LoadingsTypes";
import Feed from "./Feed";

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
    const articlesCount = useSelector(state => state.articleState.articlesCount);

    const classes = useStyles();
    const [page, setPage] = useState(1);

    const fetchMoreArticles = () => {
        setPage(page + 1);
        dispatch(fetchArticles(page));
    };

    useEffect(() => {
        if (diseaseId === undefined) {
            dispatch(fetchArticles(page));
        } else {
            dispatch(fetchArticlesForDisease(diseaseId, 10));
        }
        // eslint-disable-next-line
    }, [diseaseId]);

    return (
        <div className={classes.articleFeed + ' col'} id={'ArticleDiv'}>
            <InfiniteScroll
                dataLength={articles.length}
                next={fetchMoreArticles}
                hasMore={articles.length < articlesCount}
                loader={<BoxLoading />}
                scrollableTarget={'ArticleDiv'}
                endMessage={"No more articles!"}
            >
                {articles.map(article => (
                    <Feed key={article.id} article={article} />
                ))}
            </InfiniteScroll>
        </div>
    )
}

export default ArticleFeed;

